import { useState } from "react";
import InputProduct from "../components/InputProduct";
import InputShopInfo from "../components/InputShopInfo";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { ConfirmTitle } from "../styles/ConfirmModalStyles";
import { sendLinkShopProductData } from "../utils/product.api";
import axios from "axios";

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
      {name: "", price: "", imageUrl: ""}
    ],
  });

  const productInputs = linkShopData.products;
  const shopInputs = {
    ...linkShopData.shop,
    userId: linkShopData.userId,
    name: linkShopData.name,
    password: linkShopData.password,
  };

  const [isCreateCompleteModalOpen, setIsCreateCompleteModalOpen] =
    useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleShopChange = (field, value) => {
    setLinkShopData((prev) => {
      // shop 객체의 키 값인 경우
      if (field === 'imageUrl' || field === 'urlName' || field === 'shopUrl') {
        return {
          ...prev,
          shop: { ...prev.shop, [field]: value }
        };
      }
      // 나머지 다른 값인 경우
      return {
        ...prev,
        [field]: value
      };
    });
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
      products: [...prev.products, { name: "", price: "", imageUrl: ""}],
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
      // 1. 이미지 업로드 전용 헬퍼 함수
      const uploadImage = async (fileOrUrl) => {
        if (typeof fileOrUrl === "string") return fileOrUrl;

        if (fileOrUrl instanceof File) {
          const formData = new FormData();
          formData.append("image", fileOrUrl);

          // baseURL 문제를 피하기 위해 직접 전체 경로로 요청 보냄
          const response = await axios.post(
            "https://linkshop-api.vercel.app/images/upload",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );

          // 서버 응답 구조가 { url: "..." } 인지 확인 필요
          // 만약 응답 객체에 바로 주소가 온다면 response.data 를 사용하세요.
          return response.data.url || response.data;
        }
        return "";
      };

      // 2. 모든 이미지를 병렬로 업로드하여 URL 획득
      const [shopImageUrl, ...productImageUrls] = await Promise.all([
        uploadImage(linkShopData.shop.imageUrl),
        ...linkShopData.products.map((p) => uploadImage(p.imageUrl)),
      ]);

      // 3. 획득한 URL 문자열들로 최종 payload 구성
      const payload = {
        name: linkShopData.name,
        userId: linkShopData.userId,
        password: linkShopData.password,
        shop: {
          imageUrl: shopImageUrl,
          urlName: linkShopData.shop.urlName || "",
          shopUrl: linkShopData.shop.shopUrl || "",
        },
        products: linkShopData.products.map((p, idx) => ({
          name: p.name,
          price: Number(p.price) || 0,
          imageUrl: productImageUrls[idx],
        })),
      };
      // --- 로그로 최종 데이터 확인 ---
      console.log("최종 전송할 Payload:", payload);

      // 4. 최종 데이터 전송 (이 부분은 기존 http 인스턴스를 사용해도 무방합니다)
      const response = await sendLinkShopProductData(payload);
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
        <InputShopInfo 
          shopInputs={shopInputs}
          onChange={handleShopChange} 
        />
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
