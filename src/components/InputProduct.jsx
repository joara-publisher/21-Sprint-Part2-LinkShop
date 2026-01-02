import { useEffect, useRef, useState } from "react";
import FormField from "./FormField";
import FormFieldCard from "./FormFieldCard";
import { AddButton, FormLabel, FormWrapper} from "../styles/CreateEditPageStyles";


function InputProduct({ products = [], onChange, onAdd }) {
  const [previewUrls, setPreviewUrls] = useState([]);
  const currentUrlsRef = useRef([]);

  useEffect(() => {
    const nextUrls = products.map((p) => {
      const fileOrUrl = p && p.imageUrl;
      if (fileOrUrl instanceof File) return URL.createObjectURL(fileOrUrl);
      if (typeof fileOrUrl === "string" && fileOrUrl) return fileOrUrl;
      return null;
    });

    // 이전에 생성한 URL들 해제
    currentUrlsRef.current.forEach((imageUrl) => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    });
    
    setPreviewUrls(nextUrls);
    currentUrlsRef.current = nextUrls;

    // 언마운트 시 남아있는 URL들 해제
    return () => {
      currentUrlsRef.current.forEach((imageUrl) => {
        if (imageUrl) URL.revokeObjectURL(imageUrl);
      });
      currentUrlsRef.current = [];
    };
  }, [products]);

  return (
    <div>
        <FormLabel>
          대표 상품
        
          <AddButton type="button" onClick={onAdd}>
            추가
          </AddButton>
        
        </FormLabel>
      {products.map((products, index) => {
        const fileInputId = `productImage-${index}`;

        return (
          <FormWrapper>
            <FormFieldCard key={index}>
              <FormField
                id={fileInputId}
                name="imageUrl"
                label="상품 대표 이미지"
                type="file"
                placeholder="상품 이미지를 첨부해 주세요"
                value={products.imageUrl || ""}
                onChange={(e) =>
                  onChange(
                    index,
                    "imageUrl",
                    e.target.files && e.target.files[0] ? e.target.files[0] : null
                  )
                }
              />

              {previewUrls[index] && (
                <div>
                  <img
                    src={previewUrls[index]}
                    alt={`상품 ${index + 1} 미리보기`}
                    width="50px"
                    height="50px"
                  />
                </div>
              )}
              
              <FormField
                name="name"
                label="상품 이름"
                type="text"
                placeholder="상품 이름을 입력해 주세요"
                value={products.name || ""}
                onChange={(e) => onChange(index, "name", e.target.value)}
              />
              <FormField
                name="price"
                label="상품 가격"
                type="text"
                placeholder="원화로 표기해 주세요"
                value={products.price || ""}
                onChange={(e) => onChange(index, "price", e.target.value)}
              />
            </FormFieldCard>
          </FormWrapper>
        );
      })}
    </div>
  );
}

export default InputProduct;