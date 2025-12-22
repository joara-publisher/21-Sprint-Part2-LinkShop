import http from "./http"

export const getProducts = async ({keyword,orderBy}={}) => {

  return await http.get("",{
    
    params:{
      keyword,orderBy 
    }
  });
};  //상품 조회