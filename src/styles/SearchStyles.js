import styled from "styled-components";
import { media } from "./media";

export const Search = styled.input`
  background-image: url("src/assets/img/icon_search.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 20px center;
  padding-left: 56px;
  box-sizing: border-box;
  border-radius: 49px;
  border: 1px solid rgba(221, 220, 223, 1);
  height: 55px;
  font-weight: 400;
  font-size: 18px;
  width: 1199px;
  ${media.tablet} {
    width: 696px;
  }
  ${media.mobile} {
    width: 344px;
  }
`;
