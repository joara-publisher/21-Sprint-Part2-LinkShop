import http from "./http";

//리스트페이지-상품 조회
export const getProducts = async ({ keyword, orderBy, cursor } = {}) => {
  return await http.get("/linkshops", {
    params: {
      keyword,
      orderBy,
      cursor,
    },
  });
};

export const getProductDetail = async (linkShopId) => {
  return await http.get(`/linkshops/${linkShopId}`);
};
