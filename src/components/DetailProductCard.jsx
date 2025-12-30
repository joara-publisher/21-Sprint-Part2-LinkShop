import {
  CardContainer,
  ProductImg,
  ProductInfo,
} from "../styles/DetailListStyles";

function DetailProductCard({ product }) {
  return (
    <CardContainer>
      <ProductImg src={product.imageUrl} alt={product.name} />
      <ProductInfo>
        <p className="name">{product.name}</p>
        <p className="price">₩{product.price.toLocaleString()}</p>
      </ProductInfo>
    </CardContainer>
  );
}

export default DetailProductCard;
