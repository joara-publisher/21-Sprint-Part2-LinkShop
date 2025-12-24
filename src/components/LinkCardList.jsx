import { useEffect, useRef } from "react";
import useShopList from "../hooks/useShopList";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import {
  ShopGrid,
  ShopCard,
  ShopItem,
  ShopImg,
  ShopProfile,
  ShopIDText,
  ShopNameText,
  ProductItem,
  ProductImg,
  ShopText,
  Likes,
  LikesText,
  EmptyResult,
  EmptyResultText,
  ProductCountText,
} from "../styles/LinkCardList.styles";
import NotFound from "../assets/img/not_found.png";
import FullLikes from "../assets/img/full_likes.png";

const LinkCardList = ({ searchText, sortBy }) => {
  const { shopList, nextCursor, fetchProducts } = useShopList({
    keyword: searchText,
    orderBy: sortBy,
  });

  const loadMoreRef = useRef(null);
  const nextCursorRef = useRef(nextCursor);

  useEffect(() => {
    nextCursorRef.current = nextCursor;
  }, [nextCursor]);

  useInfiniteScroll(loadMoreRef, () => {
    if (nextCursorRef.current !== null) {
      fetchProducts(nextCursorRef.current);
    }
  });

  const hasKeyword = searchText.trim().length > 0;
  if (hasKeyword && shopList.length == 0) {
    return (
      <EmptyResult>
        <img src={NotFound} alt="검색 결과 없음" width="375px" height="182px" />
        <EmptyResultText>
          검색 결과가 없어요 <br />
          지금 프로필을 만들고 내 상품을 소개해보세요
        </EmptyResultText>
      </EmptyResult>
    );
  }

  return (
    <ShopGrid>
      {shopList &&
        shopList.map((item) => {
          return (
            <ShopCard key={item.id}>
              <ShopItem>
                <ShopProfile>
                  <ShopImg src={item.shop.imageUrl} />

                  <ShopText>
                    <ShopNameText>{item.name}</ShopNameText>
                    <ShopIDText>@{item.userId}</ShopIDText>
                  </ShopText>
                </ShopProfile>
                <Likes>
                  <img src={FullLikes} width={21} height={19} />
                  <LikesText>{item.likes}</LikesText>
                </Likes>
              </ShopItem>
              <ProductCountText>대표상품 {item.productsCount}</ProductCountText>
              <ProductItem>
                {item.products.map((product, index) => {
                  return (
                    <div key={index}>
                      <ProductImg src={product.imageUrl} />
                    </div>
                  );
                })}
              </ProductItem>
            </ShopCard>
          );
        })}

      {nextCursor !== null && <div ref={loadMoreRef} />}
    </ShopGrid>
  );
};
export default LinkCardList;
