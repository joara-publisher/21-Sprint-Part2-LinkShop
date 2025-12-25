import { useEffect, useState } from "react";
import { getProductDetail } from "../utils/product.api.js";
import { useParams } from "react-router-dom";
import DetailProductList from "../components/DetailProductList.jsx";
import { ShopLike, ShopLikeDelete } from "../utils/product.api.js";
import DetailShopHeader from "../components/DetailShopHeader.jsx";

function DetailPage() {
  const { linkShopId } = useParams();
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

        // ⭐ localStorage에서 좋아요 상태 복원
        const liked = localStorage.getItem(`liked-shop-${linkShopId}`);
        if (liked === "true") {
          setIsLiked(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    shopDetail();
  }, [linkShopId]);

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        // ❤️ → 🤍 (취소)
        await ShopLikeDelete(linkShopId);
        setIsLiked(false);
        setLikes((prev) => prev - 1);
        localStorage.removeItem(likedKey);
      } else {
        // 🤍 → ❤️ (좋아요)
        await ShopLike(linkShopId);
        setIsLiked(true);
        setLikes((prev) => prev + 1);
        localStorage.setItem(likedKey, "true");
      }
    } catch (error) {
      console.error("좋아요 처리 실패", error);
    }
  };

  /* 공유 / 수정 / 삭제  */
  const handleShare = () => {
    console.log("공유");
  };

  const handleEdit = () => {
    console.log("수정");
  };

  const handleDelete = () => {
    console.log("삭제");
  };

  if (!detailData) return <p>로딩중...</p>;

  return (
    <>
      <header>상단 디자인, 돌아가기</header>
      <DetailShopHeader
        shopImage={detailData.shop.imageUrl}
        shopName={detailData.name}
        userId={detailData.userId}
        likes={likes}
        isLiked={isLiked}
        onLikeClick={handleLikeClick}
        onShareClick={handleShare}
        onEditClick={handleEdit}
        onDeleteClick={handleDelete}
      />

      <section>
        <h2>대표 상품</h2>

        {!detailData ? (
          <p>로딩중...</p>
        ) : (
          <DetailProductList products={detailData.products} />
        )}
      </section>
    </>
  );
}

export default DetailPage;
