import { useState } from "react";
import InputProduct from "../components/InputProduct";
import InputShopInfo from "../components/InputShopInfo";
import Button from "../components/Button";

function CreateShop() {
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
  const handleProductChange = (index, e) => {
    const { name, value, type, files } = e.target;
    setProductInputs(prev => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        [name]: type === "file" ? (files && files[0] ? files[0] : null) : value,
      };
      return next;
    });
  };

  // 새 상품 카드 추가
  const handleAddProduct = () => {
    setProductInputs(prev => [
      ...prev,
      { productImage: null, productName: "", productPrice: "" },
    ]);
  };

  // 쇼핑몰 입력 변경 핸들러
  const handleShopChange = (e) => {
    const { name, value, type, files } = e.target;
    setShopInputs(prev => ({
      ...prev,
      [name]: type === "file" ? (files && files[0] ? files[0] : null) : value,
    }));
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

    Object.entries(shopInputs).forEach(([key, value]) => {
      if (value !== null && value !== "") formData.append(key, value);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputProduct 
        products={productInputs} 
        onChange={handleProductChange}
        onAdd={handleAddProduct}
      />
      <InputShopInfo shopInputs={shopInputs} onChange={handleShopChange} />
      <Button type="submit">
        생성하기
      </Button>
    </form>
  )
}

export default CreateShop;