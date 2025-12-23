import { useEffect, useState } from "react";
import { getProducts } from "../utils/product.api";

const useShopList = ({ keyword, orderBy } = {}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts({ keyword, orderBy });
        setProducts(res.data.list);
      } catch (error) {
        console.log("상품 목록 조회 에러:", error);
      }
    };

    fetchProducts();
  }, [keyword, orderBy]);
  return products;
};

export default useShopList;
