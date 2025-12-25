import styled from "styled-components";
import { media } from "./media";
export const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 587px);
  grid-template-rows: repeat(3, auto);
  gap: 24px;

  ${media.tablet} {
    grid-template-columns: repeat(1, 696px);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 344px);
  }
`;
export const ShopCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  height: 237px;
  justify-content: center;
  background-color: rgba(250, 250, 251, 1);
`;
export const ShopItem = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: 24px;
`;
export const ShopProfile = styled.div`
  display: flex;
  width: 213px;
`;
export const ShopNameText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
`;
export const ShopIDText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: rgba(136, 135, 144, 1);
  margin-top: 12px;
`;
export const ShopImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductItem = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 8px;
`;
export const ProductCountText = styled.div`
  margin-left: 24px;
  margin-top: 8px;
  font-weight: 500;
  font-size: 15px;
`;
export const ProductImg = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 15px;
  margin-right: 12px;
`;
export const ShopText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;
export const Likes = styled.div`
  display: flex;
  margin-left: 279px;
  ${media.tablet} {
    margin-left: 388px;
  }
  ${media.mobile} {
    margin-left: 36px;
  }
`;
export const LikesText = styled.div`
  margin-left: 4px;
`;
export const EmptyResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyResultText = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-height: 100%;
  margin-top: 32px;
  text-align: center;
  line-height: 100%;
  letter-spacing: 0;
`;
export const ShopGridWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
