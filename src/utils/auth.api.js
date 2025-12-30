import http from "./http";

export const shopDelete = async (linkShopId, currentPassword) => {
  return await http.delete(`/linkshops/${linkShopId}`, {
    data: {
      currentPassword,
    },
  });
};
