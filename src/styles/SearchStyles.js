import styled from "styled-components";
import SearchIcon from "../assets/img/icon_search.png"
export const Search = styled.input` 
  background-image: url(${SearchIcon});
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
  width: 100%;
`;
