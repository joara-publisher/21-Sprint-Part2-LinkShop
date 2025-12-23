import { useEffect } from "react";
import { getProductDetail } from "../utils/product.api.js";

function DetailPage() {
  useEffect(() => {
    const productDetail = async () => {
      const res = await getProductDetail(982);
      console.log(res.data);
    };

    productDetail();
  }, []);

  return (
    <>
      <header>디자인, 돌아가기</header>
      <section>너구리상점 영역</section>
      <section>
        <h2>대표 상품</h2>
        <div>상품 받아와서 뿌려주기</div>
      </section>
    </>
  );
}

export default DetailPage;
