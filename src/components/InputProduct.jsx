import { useEffect, useRef, useState } from "react";
import FormField from "./FormField";
import FormFieldCard from "./FormFieldCard";

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
      <h3>대표 상품</h3>

      <div>
        <button type="button" onClick={onAdd}>
          추가
        </button>
      </div>

      {products.map((products, index) => {
        const fileInputId = `productImage-${index}`;

        return (
          <FormFieldCard key={index}>
              <FormField
                id={fileInputId}
                name="productImage"
                label="상품 대표 이미지"
                type="file"
                placeholder="상품 이미지를 첨부해 주세요"
                value={products.imageUrl || ""}
                onChange={(e) => onChange(index, e)}
              />

            {previewUrls[index] && (
              <div>
                <img
                  src={previewUrls[index]}
                  alt={`상품 ${index + 1} 미리보기`}
                />
              </div>
            )}

            <FormField
              name="productName"
              label="상품 이름"
              type="text"
              placeholder="상품 이름을 입력해 주세요"
              value={products.name || ""}
              onChange={(e) => onChange(index, e)}
            />
            <FormField
              name="productPrice"
              label="상품 가격"
              type="text"
              placeholder="상품 가격을 입력해 주세요"
              value={products.price || 0}
              onChange={(e) => onChange(index, e)}
            />
          </FormFieldCard>
        );
      })}
    </div>
  );
}

export default InputProduct;