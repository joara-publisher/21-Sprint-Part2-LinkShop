import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(1, auto);
  }
  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, auto);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafb;
  border-radius: 16px;
  gap: 20px;
  width: 588px;
  height: 127px;
  padding: 16px 20px;
  box-sizing: border-box;

  /* 💡 핵심 로직: 너비 설정 */
  width: 100%;
  max-width: none;
`;

export const ProductImg = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  .name {
    font-size: 17px;
    font-weight: 400;
    color: #14151a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 180px;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
    color: #14151a;
  }
`;
