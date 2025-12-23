import useShopList from "../hooks/useShopList"
import { ShopGrid,ShopCard ,ShopItem,ProductItem,ShopText,EmptyResult,EmptyResultText} from "../styles/LinkCardList.styles";
import SearchNull from "../../public/img/img_search_null.png"
const LinkCardList=({searchText,sortBy})=>{
  const list=useShopList({
    keyword: searchText,
    orderBy: sortBy,
  });
  const hasKeyword = searchText.trim().length > 0;
  return(
    hasKeyword&&list.length==0?
    <EmptyResult>
      <img src={SearchNull} alt="검색 결과 없음" width="375px" height="182px" />
      <EmptyResultText>검색 결과가 없어요 <br/>지금 프로필을 만들고 내 상품을 소개해보세요</EmptyResultText>
    </EmptyResult>:
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