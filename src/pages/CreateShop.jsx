import { useState } from "react";
import InputProduct from "../components/InputProduct";
import InputShopInfo from "../components/InputShopInfo";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { ConfirmTitle } from "../styles/ConfirmModalStyles";
import { sendLinkShopProductData } from "../utils/product.api";

function CreateShop() {
  const [linkShopData, setLinkShopData] = useState({
    password: "",
    userId: "",
    name: "",
    shop: {
      imageUrl: "",
      urlName: "",
      shopUrl: "",
    },
    products: [
      {name: "", price: 0, imageUrl: ""}
    ],
  });

  const productInputs = linkShopData.products;
  const shopInputs = linkShopData.shop;

  const [isCreateCompleteModalOpen, setIsCreateCompleteModalOpen] =
    useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleShopChange = (field, value) => {
    setLinkShopData((prev) => ({
      ...prev,
      shop: { ...prev.shop, [field]: value },
    }));
  };

  const handleProductChange = (index, field, value) => {
    setLinkShopData((prev) => {
      const products = prev.products.map((p, i) => (
        i === index ? { ...p, [field]: value} : p
      ));
      return { ...prev, products };
    });
  };

  const handleAddProduct = () => {
    setLinkShopData((prev) => ({
      ...prev,
      products: [...prev.products, { name: "", price: 0, imageUrl: ""}],
    }));
  };

  const toggleCreateCompleteModal = () => {
    setIsCreateCompleteModalOpen((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await sendLinkShopProductData(linkShopData);
      setLinkShopData(response.data);
      setIsCreateCompleteModalOpen(true);
    } catch (error) {
      console.error("링크샵 생성 실패:", error);
      alert("생성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
        <InputProduct
          products={productInputs}
          onChange={handleProductChange}
          onAdd={handleAddProduct}
        />
        <InputShopInfo shopInputs={shopInputs} onChange={handleShopChange} />
        <Button 
          layout="full"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "생성중..." : "생성하기"}
        </Button>
      </form>

      <Modal isOpen={isCreateCompleteModalOpen} variant="modal">
        <ConfirmTitle>등록이 완료되었습니다.</ConfirmTitle>
        <Button onClick={toggleCreateCompleteModal} layout="full">
          확인
        </Button>
      </Modal>
    </>
  );
}

export default CreateShop;
