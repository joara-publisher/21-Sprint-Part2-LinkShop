import { useState } from "react";
import InputProduct from "../components/InputProduct";
import InputShopInfo from "../components/InputShopInfo";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { ConfirmTitle } from "../styles/ConfirmModalStyles";

function EditShop() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [linkShopData, setLinkShopData] = useState({
    currentPassword: "",
    userId: "",
    name: "",
    shop: {
      imageUrl: "",
      urlName: "",
      shopUrl: "",
    },
    products: [{ name: "", price: 0, imageUrl: "" }],
  });

  const [isUpdateCompleteModalOpen, setIsUpdateCompleteModalOpen] =
    useState(false);

  const updateShopField = (field, value) => {
    setLinkShopData((prev) => ({
      ...prev,
      shop: { ...prev.shop, [field]: value },
    }));
  };

  const updateProductField = (index, field, value) => {
    setLinkShopData((prev) => {
      const updatedProducts = [...prev.products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        [field]: value,
      };
      return { ...prev, products: updatedProducts };
    });
  };

  const handleAddProduct = () => {
    setLinkShopData((prev) => ({
      ...prev,
      products: [...prev.products, { name: "", price: 0, imageUrl: "" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 중복 제출 차단
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      // 서버에 수정된 데이터 보내기
    } catch (error) {
      alert("수정에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleUpdateCompleteModal = () => {
    setIsUpdateCompleteModalOpen((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputProduct
          products={linkShopData.products}
          onChange={updateProductField}
          onAdd={handleAddProduct}
        />
        <InputShopInfo
          shopInputs={linkShopData.shop}
          onChange={updateShopField}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          layout="full"
          onClick={toggleUpdateCompleteModal}
        >
          {isSubmitting ? "수정중..." : "수정하기"}
        </Button>
      </form>
      <Modal isOpen={isUpdateCompleteModalOpen} variant="modal">
        <ConfirmTitle>수정이 완료되었습니다.</ConfirmTitle>
        <Button onClick={toggleUpdateCompleteModal} layout="full">
          확인
        </Button>
      </Modal>
    </>
  );
}

export default EditShop;
