function DetailProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="info">
        <p className="name">{product.name}</p>
        <p className="price">₩{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default DetailProductCard;
