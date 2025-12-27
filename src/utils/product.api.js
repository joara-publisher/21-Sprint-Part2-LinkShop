import http from "./http";

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
