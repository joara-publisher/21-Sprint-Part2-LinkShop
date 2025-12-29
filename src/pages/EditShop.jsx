import { useState } from "react";
import InputProduct from "../components/InputProduct";
import InputShopInfo from "../components/InputShopInfo";
import Button from "../components/Button";

function EditShop() {
  const [productInputs, setProductInputs] = useState([
    { productImage: null, productName: "", productPrice: "" },
  ]);

  const [shopInputs, setShopInputs] = useState({
    shopImage: null,
    shopName: "",
    shopUrl: "",
    userId: "",
    password: ""
  });

  // 상품 입력 변경 핸들러 (index 기반)
  const handleProductChange = (index, field, value) => {
    const updatedInputs = [...productInputs];
    updatedInputs[index][field] = value;
    setProductInputs(updatedInputs);
  };
  
  // 새 상품 카드 추가
  const handleAddProduct = () => {
    setProductInputs(prev => [
      ...prev,
      { productImage: null, productName: "", productPrice: "" },
    ]);
  }

  // 쇼핑몰 입력 변경 핸들러
  const handleShopChange = (field, value) => {
    setShopInputs(prev => ({ ...prev, [field]: value }));
  };

  // 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // products를 배열 형태로 전송 (서버 기대 형식에 맞춰 변경 가능)
    productInputs.forEach((p, i) => {
      formData.append(`products[${i}][productName]`, p.productName || "");
      formData.append(`products[${i}][productPrice]`, p.productPrice || "");
      if (p.productImage) formData.append(`products[${i}][productImage]`, p.productImage);
    });

    // 쇼핑몰 정보 추가
    formData.append("shopName", shopInputs.shopName || "");
    formData.append("shopUrl", shopInputs.shopUrl || "");
    formData.append("userId", shopInputs.userId || "");
    formData.append("password", shopInputs.password || "");
    if (shopInputs.shopImage) formData.append("shopImage", shopInputs.shopImage);

    // 여기에 formData를 서버로 전송하는 로직 추가
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputProduct 
        products={productInputs} 
        onChange={handleProductChange} 
        onAdd={handleAddProduct}
      />
      <InputShopInfo shopInputs={shopInputs} onChange={handleShopChange} />
      <Button type="submit">
        수정하기
      </Button>
    </form>
  )
}

export default EditShop;