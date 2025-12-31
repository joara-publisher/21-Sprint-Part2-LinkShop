import { useParams } from "react-router-dom";
import DetailProductList from "../components/DetailProductList";
import DetailShopHeader from "../components/DetailShopHeader";
import { useDetailShop } from "../hooks/useDetailShop";
import StatusMessage from "../components/StatusMessage";
import DetailPageTopSection from "../components/DetailPageTopSection";
import { PageWrapper, ProductSection } from "../styles/DetailPageStyles";
import Modal from "../components/Modal";
import { useState } from "react";
import {
  ConfirmButton,
  ModalDescription,
  ModalTitle,
  PasswordInput,
  ButtonWrapper,
  PasswordLabel,
} from "../styles/ModalStyles";
function DetailPage() {
  const { linkShopId } = useParams();
  const { detailData, isLiked, likes, toggleLike, deleteShop } =
    useDetailShop(linkShopId);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    message: "",
    isSuccess: false,
  });

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setPassword("");
  };

  const closeInfoModal = () => {
    setInfoModal((prev) => ({ ...prev, isOpen: false }));
    if (infoModal.isSuccess) {
      window.location.href = "/";
    }
  };

  const handleShare = () => console.log("공유");
  const handleEdit = () => console.log("수정");
  const handleDelete = () => {
    setIsPasswordModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    const result = await deleteShop(password);

    if (result.success) {
      setIsPasswordModalOpen(false);
      setInfoModal({
        isOpen: true,
        message: "상점이 삭제되었습니다.",
        isSuccess: true,
      });
    } else {
      setInfoModal({
        isOpen: true,
        message: result.message,
        isSuccess: false,
      });
      setPassword("");
    }
  };

  if (!detailData) return <StatusMessage status="로딩중" />;

  return (
    <>
      <DetailPageTopSection />
      <PageWrapper>
        <DetailShopHeader
          shopImage={detailData.shop.imageUrl}
          shopName={detailData.name}
          userId={detailData.userId}
          likes={likes}
          isLiked={isLiked}
          onLikeClick={toggleLike}
          onShareClick={handleShare}
          onEditClick={handleEdit}
          onDeleteClick={handleDelete}
        />

        <ProductSection>
          <h2>대표 상품</h2>
          <DetailProductList products={detailData.products} />
        </ProductSection>
      </PageWrapper>
      <Modal isOpen={isPasswordModalOpen} variant="modal">
        <ModalTitle>비밀번호 입력</ModalTitle>
        <ModalDescription>삭제하기 위한 비밀번호를 입력하세요</ModalDescription>
        <PasswordLabel>비밀번호</PasswordLabel>
        <PasswordInput
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonWrapper>
          <ConfirmButton onClick={handleDeleteConfirm} $variant="delete">
            삭제하기
          </ConfirmButton>
          <ConfirmButton onClick={closePasswordModal}>취소하기</ConfirmButton>
        </ButtonWrapper>
      </Modal>

      <Modal isOpen={infoModal.isOpen} variant="modal">
        <ModalDescription
          style={{
            marginTop: "-10px",
            marginBottom: "32px",
            fontSize: "18px",
            lineHeight: "1.4",
          }}
        >
          {infoModal.message}
        </ModalDescription>
        <ConfirmButton
          onClick={closeInfoModal}
          style={{
            backgroundColor: "rgba(62, 69, 236, 1)",
            width: "100%",
          }}
        >
          확인
        </ConfirmButton>
      </Modal>
    </>
  );
}

export default DetailPage;
