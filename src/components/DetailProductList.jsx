import DetailProductCard from "../components/DetailProductCard.jsx";
import { ProductGrid } from "../styles/DetailListStyles.js";

function DetailProductList({ products }) {
  return (
    <ProductGrid>
      {products.map((product) => (
        <DetailProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
}

export default DetailProductList;
