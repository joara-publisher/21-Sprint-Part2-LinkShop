import http from "./http";

export const getProducts = async ({ keyword, orderBy, cursor } = {}) => {
  return await http.get("", {
    params: {
      keyword,
      orderBy,
      cursor,
    },
  });
}; //상품 조회