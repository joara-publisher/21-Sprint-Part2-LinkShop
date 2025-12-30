import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const HeaderCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fafafb;
  border-radius: 24px;
  padding: 40px 20px;
  width: 100%;
  max-width: 1200px;
  min-width: 466px;
  height: 266px;
  box-sizing: border-box;
  position: relative;
  margin: 20px auto 0;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;

  img {
    cursor: pointer;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: #14151a;
  }
`;

export const ShopInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ShopProfileImg = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const ShopName = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  color: #14151a;
`;

export const ShopId = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #888790;
  margin-top: 8px;
`;

// 우상단 버튼 모음 (공유, 수정, 삭제)
export const ActionGroup = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  gap: 16px;
`;

export const ShareButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const EditDeleteBox = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0px 4px 16px #1122110d;
  z-index: 10;
  overflow: hidden;

  button {
    padding: 18px 48px;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    background: white;
    border: none;
    cursor: pointer;
    text-align: left;

    &:hover {
      background: #f5f5f5;
      color: #14151a;
    }

    &:first-child {
      border-bottom: 1px solid #dddddd;
    }
  }
`;
