import { useEffect, useState } from "react";
import { getProductDetail } from "../utils/product.api.js";
import { useParams } from "react-router-dom";
import DetailProductList from "../components/DetailProductList.jsx";

function DetailPage() {
  const { linkShopId } = useParams();
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    if (!linkShopId) return;

    const shopDetail = async () => {
      try {
        const response = await getProductDetail(linkShopId);
        setDetailData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    shopDetail();
  }, [linkShopId]);

  return (
    <>
      <header>디자인, 돌아가기</header>
      <section>너구리상점 영역</section>
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
