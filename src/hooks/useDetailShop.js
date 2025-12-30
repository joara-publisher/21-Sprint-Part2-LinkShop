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

  return {
    detailData,
    isLiked,
    likes,
    toggleLike,
  };
}
