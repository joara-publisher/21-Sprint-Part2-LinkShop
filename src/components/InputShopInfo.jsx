import { useEffect, useRef, useState } from "react";
import FormField from "./FormField";
import FormFieldCard from "./FormFieldCard";

function InputShopInfo({ shopInputs, onChange }) {
  const { shopImage, shopName, shopUrl, userId, password } = shopInputs;
  const [previewUrl, setPreviewUrl] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      URL.revokeObjectURL(previewRef.current);
      previewRef.current = null;
      }
    
      if (shopImage) {
        previewRef.current = URL.createObjectURL(shopImage);
        setPreviewUrl(previewRef.current);
      } else {
        setPreviewUrl(null);
      }

      return () => {
        if (previewRef.current) {
          URL.revokeObjectURL(previewRef.current);
          previewRef.current = null;
        }
      };
  }, [shopImage]);

  return (
    <div>
      <h3>내 쇼핑몰</h3>
      <FormFieldCard>
        <FormField 
          id="shopImage"
          name="shopImage" 
          label="쇼핑몰 대표 이미지" 
          type="file" 
          placeholder="쇼핑몰 이미지를 첨부해 주세요"
          value={shopImage || ""}
          onChange={onChange} 
        />
        {previewUrl && (
          <div>
            <img src={previewUrl} alt="쇼핑몰 미리보기" />
          </div>
        )}
        <FormField 
          name="shopName" 
          label="이름" 
          type="text" 
          placeholder="쇼핑몰 이름을 입력해 주세요" 
          value={shopName || ""}
          onChange={onChange} 
        />
        <FormField 
          name="shopUrl" 
          label="Url" 
          type="url" 
          placeholder="Url을 입력해 주세요" 
          value={shopUrl || ""}
          onChange={onChange} 
        />
        <FormField 
          name="userId" 
          label="유저 ID" 
          type="text" 
          placeholder="유저 ID를 입력해 주세요" 
          value={userId || ""}
          onChange={onChange} 
        />
        <FormField 
          name="password" 
          label="비밀번호" 
          type="password" 
          placeholder="비밀번호를 입력해 주세요"
          value={password || ""}
          onChange={onChange} 
        />
      </FormFieldCard>
    </div>
  )
}

export default InputShopInfo;