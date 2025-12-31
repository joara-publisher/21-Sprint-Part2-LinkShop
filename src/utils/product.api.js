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

export const sendLinkShopProductData = async (linkShopData) => {
  return await http.post('/linkshops', linkShopData);
}

export const ShopLike = async (linkShopId) => {
  return await http.post(`/linkshops/${linkShopId}/like`);
};

export const ShopLikeDelete = async (linkShopId) => {
  return await http.delete(`/linkshops/${linkShopId}/like`);
};

export const sendLinkShopProductData = async (linkShopData) => {
  return await http.post('/linkshops', linkShopData);
}