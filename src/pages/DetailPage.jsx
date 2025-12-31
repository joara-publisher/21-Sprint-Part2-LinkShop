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
  const { detailData, isLiked, likes, toggleLike } = useDetailShop(linkShopId);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setPassword("");
  };
  const handleShare = () => console.log("공유");
  const handleEdit = () => console.log("수정");
  const handleDelete = () => {
    setIsPasswordModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    if (password !== "12341234") {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      console.log("삭제 API 호출", linkShopId);

      closePasswordModal();
    } catch (error) {
      console.error("삭제 실패", error);
      alert("삭제에 실패했습니다.");
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
    </>
  );
}

export default DetailPage;
