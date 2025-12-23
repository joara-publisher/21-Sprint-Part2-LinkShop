import http from "./http";

//리스트페이지-상품 조회
export const getProducts = async ({ keyword, orderBy } = {}) => {
  return await http.get("/linkshops", {
    params: {
      keyword,
      orderBy,
    },
  });
};

//상세페이지 조회
export const getProductDetail = async (linkShopId) => {
  return await http.get(`/linkshops/${linkShopId}`);
};
