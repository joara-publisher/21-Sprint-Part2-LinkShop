import DetailProductCard from "../components/DetailProductCard.jsx";

function DetailProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <DetailProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default DetailProductList;
