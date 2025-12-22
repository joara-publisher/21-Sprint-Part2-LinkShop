import FormField from "./FormField";
import FormFieldCard from "./FormFieldCard";

function InputShopInfo() {    
  return (
    <div>
      <h3>내 쇼핑몰</h3>
      <FormFieldCard>
        <FormField label="쇼핑몰 대표 이미지" type="file" placeholder="쇼핑몰 이미지를 첨부해 주세요" />
        <FormField label="이름" type="text" placeholder="쇼핑몰 이름을 입력해 주세요" />
        <FormField label="Url" type="url" placeholder="Url을 입력해 주세요" />
        <FormField label="유저 ID" type="text" placeholder="유저 ID를 입력해 주세요" />
        <FormField label="비밀번호" type="password" placeholder="비밀번호를 입력해 주세요" />
      </FormFieldCard>
    </div>
  )
}

export default InputShopInfo;