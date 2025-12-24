import { useEffect, useState } from "react";
import { getProducts } from "../utils/product.api";

const useShopList = ({ keyword, orderBy } = {}) => {
  const [shopList, setShopList] = useState([]);
  const [nextCursor, setNextCursor] = useState(0);

  const fetchProducts = async (cursor) => {
    try {
      const res = await getProducts({ keyword, orderBy, cursor });

      setShopList((prev) => {
        if (cursor === 0) {
          return res.data.list;
        }

        const newItems = res.data.list.filter(
          (item) => !prev.some((prevItem) => prevItem.id === item.id)
        );

        return [...prev, ...newItems];
      });

      setNextCursor(res.data.nextCursor);
    } catch (error) {
      console.log("상품 목록 조회 에러:", error);
    }
  };

  const resetAndFetch = async () => {
    setShopList([]);
    setNextCursor(0);
    await fetchProducts(0);
  };

  useEffect(() => {
    resetAndFetch();
  }, [keyword, orderBy]);

  return { shopList, nextCursor, fetchProducts };
};

export default useShopList;