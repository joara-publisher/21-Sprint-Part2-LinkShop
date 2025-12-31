import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { mediaQueries } from "./mediaQueries";

export const TopSection = styled.section`
  width: 100%;
  margin-bottom: 25px;
  padding: 0 25px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 70px;
    display: block;
  }

  ${mediaQueries.tablet} {
    padding: 0 14px;
  }
  ${mediaQueries.mobile} {
    padding: 0 9px;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
`;

export const LinkWrapper = styled(RouterLink)`
  display: inline-block;
  text-decoration: none;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #888790;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px 0;
`;
