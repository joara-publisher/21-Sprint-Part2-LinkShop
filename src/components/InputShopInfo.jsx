import FormField from "./FormField";
import FormFieldCard from "./FormFieldCard";
import useImagePreview from "../hooks/useImagePreview";

function InputShopInfo({ shopInputs = {}, onChange }) {
  const { imageUrl, shopUrl, userId, name, password } = shopInputs;
  const previewUrl = useImagePreview({ shopImage: imageUrl });

  return (
    <div>
      <h3>내 쇼핑몰</h3>
      <FormFieldCard>
        <FormField 
          id="imageUrl"
          name="imageUrl"
          label="쇼핑몰 대표 이미지"
          type="file"
          placeholder="쇼핑몰 이미지를 첨부해 주세요"
          value={imageUrl || ""}
          onChange={(e) =>
            onChange(
              "imageUrl", 
              e.target.files && e.target.files[0] ? e.target.files[0] : null
            )
          } 
        />
        {previewUrl && (
          <div>
            <img src={previewUrl} alt="쇼핑몰 미리보기" />
          </div>
        )}
        <FormField 
          name="name" 
          label="이름" 
          type="text" 
          placeholder="쇼핑몰 이름을 입력해 주세요" 
          value={name || ""}
          onChange={(e) => onChange("name", e.target.value)} 
        />
        <FormField 
          name="shopUrl" 
          label="Url" 
          type="url" 
          placeholder="Url을 입력해 주세요" 
          value={shopUrl || ""}
          onChange={(e) => onChange("shopUrl", e.target.value)} 
        />
        <FormField 
          name="userId" 
          label="유저 ID" 
          type="text" 
          placeholder="유저 ID를 입력해 주세요" 
          value={userId || ""}
          onChange={(e) => onChange("userId", e.target.value)} 
        />
        <FormField 
          name="password" 
          label="비밀번호" 
          type="password" 
          placeholder="비밀번호를 입력해 주세요"
          value={password || ""}
          onChange={(e) => onChange("password", e.target.value)} 
        />
      </FormFieldCard>
    </div>
  )
}

export default InputShopInfo;