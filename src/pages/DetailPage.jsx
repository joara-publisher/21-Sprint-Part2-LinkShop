import { useParams } from "react-router-dom";
import DetailProductList from "../components/DetailProductList";
import DetailShopHeader from "../components/DetailShopHeader";
import { useDetailShop } from "../hooks/useDetailShop";
import StatusMessage from "../components/StatusMessage";

function DetailPage() {
  const { linkShopId } = useParams();
  const { detailData, isLiked, likes, toggleLike } = useDetailShop(linkShopId);

  const handleShare = () => console.log("공유");
  const handleEdit = () => console.log("수정");
  const handleDelete = () => console.log("삭제");

  if (!detailData) return <StatusMessage status="로딩중" />;

  return (
    <>
      <header>상단 디자인, 돌아가기</header>

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

      <section>
        <h2>대표 상품</h2>
        <DetailProductList products={detailData.products} />
      </section>
    </>
  );
}

export default DetailPage;
