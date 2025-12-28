import { useEffect, useRef, useState } from "react";
import FormField from "./FormField";
import FormFieldCard from "./FormFieldCard";

function InputProduct({ products = [], onChange, onAdd }) {
  const [previewUrls, setPreviewUrls] = useState([]);
  const currentUrlsRef = useRef([]);

  useEffect(() => {
    const nextUrls = products.map((p) => {
      if (p && p.productImage) return URL.createObjectURL(p.productImage);
      return null;
    });

    // 이전에 생성한 URL들 해제
    currentUrlsRef.current.forEach((url) => {
      if (url) URL.revokeObjectURL(url);
    });
    
    setPreviewUrls(nextUrls);
    currentUrlsRef.current = nextUrls;

    // 언마운트 시 남아있는 URL들 해제
    return () => {
      currentUrlsRef.current.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
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

      {products.map((product, index) => {
        const fileInputId = `productImage-${index}`;

        return (
          <FormFieldCard key={index}>
              <FormField
                id={fileInputId}
                name="productImage"
                label="상품 대표 이미지"
                type="file"
                placeholder="상품 이미지를 첨부해 주세요"
                value={product.productImage || ""}
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
              value={product.productName || ""}
              onChange={(e) => onChange(index, e)}
            />
            <FormField
              name="productPrice"
              label="상품 가격"
              type="text"
              placeholder="상품 가격을 입력해 주세요"
              value={product.productPrice || ""}
              onChange={(e) => onChange(index, e)}
            />
          </FormFieldCard>
        );
      })}
    </div>
  );
}

export default InputProduct;