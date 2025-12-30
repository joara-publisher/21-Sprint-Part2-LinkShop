import { useEffect, useState } from "react";
import {
  getProductDetail,
  ShopLike,
  ShopLikeDelete,
} from "../utils/product.api";

export function useDetailShop(linkShopId) {
  const [detailData, setDetailData] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const likedKey = `liked-shop-${linkShopId}`;

  useEffect(() => {
    if (!linkShopId) return;

    const shopDetail = async () => {
      try {
        const response = await getProductDetail(linkShopId);
        setDetailData(response.data);
        setLikes(response.data.likes);

        const liked = localStorage.getItem(likedKey);
        if (liked) {
          setIsLiked(true);
        }
      } catch (error) {
        console.error("상세 조회 실패", error);
      }
    };

    shopDetail();
  }, [linkShopId]);

  const toggleLike = async () => {
    try {
      if (isLiked) {
        await ShopLikeDelete(linkShopId);
        setIsLiked(false);
        setLikes((prev) => prev - 1);
        localStorage.removeItem(likedKey);
      } else {
        await ShopLike(linkShopId);
        setIsLiked(true);
        setLikes((prev) => prev + 1);
        localStorage.setItem(likedKey, "true");
      }
    } catch (error) {
      console.error("좋아요 처리 실패", error);
    }
  };

  const deleteShop = async (currentPassword) => {
    try {
      await shopDelete(linkShopId, currentPassword);
      alert("상점이 삭제되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제에 실패했습니다. 비밀번호를 확인해주세요.");
    }
  };

  return {
    detailData,
    isLiked,
    likes,
    toggleLike,
    deleteShop,
  };
}
