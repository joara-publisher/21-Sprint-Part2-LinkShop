import { Link, useParams } from "react-router-dom";
import DetailProductList from "../components/DetailProductList";
import DetailShopHeader from "../components/DetailShopHeader";
import { useDetailShop } from "../hooks/useDetailShop";
import StatusMessage from "../components/StatusMessage";
import DetailPageTopSection from "../components/DetailPageTopSection";
import { PageWrapper, ProductSection } from "../styles/DetailPageStyles";

function DetailPage() {
  const { linkShopId } = useParams();
  const { detailData, isLiked, likes, toggleLike } = useDetailShop(linkShopId);

  const handleShare = () => console.log("공유");
  const handleEdit = () => console.log("수정");
  const handleDelete = () => console.log("삭제");

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
    </>
  );
}

export default DetailPage;
