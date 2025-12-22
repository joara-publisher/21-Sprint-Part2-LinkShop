import useShopList from "../hooks/useShopList"
import { ShopGrid,ShopCard ,ShopItem,ProductItem,ShopText} from "../styles/LinkCardList.styles";
const LinkCardList=({keyword,orderBy})=>{
  const list=useShopList({keyword,orderBy});
  console.log(list);
  return(
    <ShopGrid >
        {list&&list.map((item)=>{
          return(
          <ShopCard key={item.id}>
          <ShopItem>
         <img src={item.shop.imageUrl}  width={30}/>
          <ShopText>
          <div>{item.name}</div>
          <div>@{item.userId}</div>
          </ShopText>
          <div>{item.likes}</div>
          </ShopItem>
          <div>대표상품 {item.productsCount}</div>
          <ProductItem>
          {item.products.map((product)=>{
            return(
           <div>
             <img src={product.imageUrl}  width={30}/>
           </div>
            )
          })}
          </ProductItem>
      
          </ShopCard>
          )
        })}
    </ShopGrid>
  )

};
export default LinkCardList;