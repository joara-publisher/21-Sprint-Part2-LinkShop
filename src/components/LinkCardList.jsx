import { useEffect, useRef } from "react";
import useShopList from "../hooks/useShopList";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import {
  ShopGrid,
  ShopCard,
  ShopItem,
  ProductItem,
  ShopText,
} from "../styles/LinkCardList.styles";

const LinkCardList = ({ searchText, sortBy }) => {
  const { shopList, nextCursor, fetchProducts } = useShopList({
    keyword: searchText,
    orderBy: sortBy,
  });

  const loadMoreRef = useRef();
  const isIntersecting = useInfiniteScroll(loadMoreRef);

  useEffect(() => {
    if (!isIntersecting) return;
    if (nextCursor === null) return;

    fetchProducts();
  }, [isIntersecting, nextCursor]);

  return (
    <ShopGrid>
      {shopList &&
        shopList.map((item) => {
          return (
            <ShopCard key={item.id}>
              <ShopItem>
                <img src={item.shop.imageUrl} width={30} />
                <ShopText>
                  <div>{item.name}</div>
                  <div>@{item.userId}</div>
                </ShopText>
                <div>{item.likes}</div>
              </ShopItem>
              <div>대표상품 {item.productsCount}</div>
              <ProductItem>
                {item.products.map((product, index) => {
                  return (
                    <div key={index}>
                      <img src={product.imageUrl} width={30} />
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
