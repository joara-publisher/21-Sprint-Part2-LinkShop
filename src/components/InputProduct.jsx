import FormField from "./FormField";
import FormFieldCard from "./FormFieldCard";

function InputProduct() {
  return (
    <div>
      <h3>대표 상품</h3>
      <FormFieldCard>
        <FormField label="상품 대표 이미지" type="file" placeholder="상품 이미지를 첨부해 주세요" />
        <FormField label="상품 이름" type="text" placeholder="상품 이름을 입력해 주세요" />
        <FormField label="상품 가격" type="text" placeholder="상품 가격을 입력해 주세요" />
      </FormFieldCard>
    </div>
  )
}

export default InputProduct;