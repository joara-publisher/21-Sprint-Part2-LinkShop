import React, { useState } from "react";
import { useToast } from "../hooks/useToast";
import { Toast } from "../components/Toast";
import emptyLike from "../assets/img/empty_likes.png";
import fullLike from "../assets/img/full_likes.png";
import shareIcon from "../assets/img/share.png";
import KebabIcon from "../assets/img/icon_kebab.svg";
import {
  HeaderCard,
  LikeButton,
  ShopId,
  ShopInfo,
  ShopName,
  ShopProfileImg,
  ActionGroup,
  MoreButton,
  EditDeleteBox,
  ShareButton,
} from "../styles/DetailShopHeaderStyles";
import { Link } from "react-router-dom";

function DetailShopHeader({
  shopImage,
  shopName,
  userId,
  likes,
  isLiked,
  onLikeClick,
  onShareClick,
  onEditClick,
  onDeleteClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showToast, message, fireToast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      fireToast("복사 완료!");
      if (onShareClick) onShareClick();
    } catch (err) {
      fireToast("복사 실패!");
    }
  };
  return (
    <HeaderCard>
      <LikeButton onClick={onLikeClick}>
        <img src={isLiked ? fullLike : emptyLike} alt="좋아요" />
        <span>{likes}</span>
      </LikeButton>

      <ShopInfo>
        <ShopProfileImg src={shopImage} alt="상점 이미지" />
        <ShopName>{shopName}</ShopName>
        <ShopId>@{userId}</ShopId>
      </ShopInfo>

      <ActionGroup>
        <ShareButton onClick={handleShare}>
          <img src={shareIcon} alt="공유하기" />
        </ShareButton>

        <MoreButton onClick={toggleMenu}>
          <img src={KebabIcon} alt="더보기" />
        </MoreButton>

        {isMenuOpen && (
          <EditDeleteBox>
            <Link to="/linkpost/:linkShopId/edit">
              <button
                onClick={() => {
                  onEditClick();
                  setIsMenuOpen(false);
                }}
              >
                수정하기
              </button>
            </Link>
            <button
              onClick={() => {
                onDeleteClick();
                setIsMenuOpen(false);
              }}
            >
              삭제하기
            </button>
          </EditDeleteBox>
        )}
      </ActionGroup>
      {showToast && <Toast message={message} top="60px" />}
    </HeaderCard>
  );
}

export default DetailShopHeader;
