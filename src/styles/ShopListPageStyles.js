import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const PageContainer = styled.div`
  max-width: 1200px;
  padding: 0 24px;
  margin: 32px auto 65px;
  overflow: hidden;

  ${mediaQueries.mobile} {
    padding: 0 16px;
    margin: 44px auto;
  }
`;

export const SearchInputWrapper = styled.div`
  margin-bottom: 40px;

  ${mediaQueries.tablet} {
    margin-bottom: 28px;
  }

  ${mediaQueries.mobile} {
    margin-bottom: 20px;
  }
`;

export const SortOptionsButtonWrapper = styled.div`
  margin-bottom: 32px;

  ${mediaQueries.tablet} {
    margin-bottom: 28px;
  }

  ${mediaQueries.mobile} {
    margin-bottom: 20px;
  }
`;
