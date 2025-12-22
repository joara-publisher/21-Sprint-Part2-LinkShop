import InputProduct from "../components/InputProduct";
import InputShopInfo from "../components/InputShopInfo";
import Header from "../components/Header";
import Button from "../components/Button";

function CreateShop() {

  return (
    <div>
      <Header />  
      <InputProduct /> 
      <InputShopInfo />
      <Button />
    </div>
  )
}
// 헤더와 버튼 컴포넌트는 공통작업이므로 일단 위치만 잡아두었습니다.
export default CreateShop;