import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 65px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;

  ${mediaQueries.tablet} {
    padding: 0 14px;
  }
  ${mediaQueries.mobile} {
    padding: 0 9px;
  }
`;

export const ProductSection = styled.section`
  margin-top: 23px;
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;
