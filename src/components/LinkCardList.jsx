import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useShopList from "../hooks/useShopList";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import StatusMessage from "./StatusMessage";
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
  ProductCountText,
} from "../styles/LinkCardList.styles";
import FullLikes from "../assets/img/full_likes.png";
import EmptyLikes from "../assets/img/empty_likes.png";
import shopFallbackRed from "../assets/img/shop_fallback_red.png";
import shopFallbackBlue from "../assets/img/shop_fallback_blue.png";
import { useNavigate } from "react-router-dom";

const LinkCardList = ({ searchText, sortBy }) => {
  const { isLoading, shopList, nextCursor, fetchProducts } = useShopList({
    keyword: searchText,
    orderBy: sortBy,
  });
  const loadMoreRef = useRef(null);
  const nextCursorRef = useRef(nextCursor);
  const fallbackImages = [shopFallbackRed, shopFallbackBlue];
  const getFallbackImage = () =>
    fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
  const navigate = useNavigate();

  useEffect(() => {
    nextCursorRef.current = nextCursor;
  }, [nextCursor]);

  useInfiniteScroll(loadMoreRef, () => {
    if (nextCursorRef.current !== null) {
      fetchProducts(nextCursorRef.current);
    }
  });

  if (isLoading && shopList.length === 0) {
    return <StatusMessage status="로딩중" />;
  }

  const hasKeyword = searchText.trim().length > 0;
  if (hasKeyword && shopList.length == 0) {
    return <StatusMessage status="검색결과없음" />;
  }
  return (
    <ShopGrid>
      {shopList &&
        shopList.map((item) => {
          return (
            <div key={item.id} onClick={() => navigate(`/link/${item.id}`)}>
              <ShopCard>
                <ShopItem>
                  <ShopProfile>
                    <ShopImg
                      src={item.shop.imageUrl || getFallbackImage()}
                      onError={(e) => {
                        e.currentTarget.onerror = null; // 무한루프 방지
                        e.currentTarget.src = getFallbackImage();
                      }}
                    />
                    <ShopText>
                      <ShopNameText>{item.name}</ShopNameText>
                      <ShopIDText>@{item.userId}</ShopIDText>
                    </ShopText>
                  </ShopProfile>
                  <Likes>
                    <img
                      src={item.likes === 0 ? EmptyLikes : FullLikes}
                      width={21}
                      height={19}
                    />
                    <LikesText>{item.likes}</LikesText>
                  </Likes>
                </ShopItem>
                <ProductCountText>
                  대표상품 {item.productsCount}
                </ProductCountText>
                <ProductItem>
                  {item.products.slice(0, 3).map((product, index) => {
                    return (
                      <div key={index}>
                        <ProductImg src={product.imageUrl} />
                      </div>
                    );
                  })}
                </ProductItem>
              </ShopCard>
            </div>
          );
        })}
      {nextCursor !== null && <div ref={loadMoreRef} />}
      {isLoading && shopList.length > 0 && <StatusMessage status="로딩중" />}
    </ShopGrid>
  );
};
export default LinkCardList;
