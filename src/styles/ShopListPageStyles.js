import styled from "styled-components";
import { media } from "./media";

export const PageContainer = styled.div`
  max-width: 1200px;
  padding: 0 24px;
  margin: 32px auto 65px;
  overflow: hidden;

  ${media.mobile} {
    padding: 0 16px;
    margin: 44px auto;
  }
`;

export const SearchInputWrapper = styled.div`
  margin-bottom: 40px;

  ${media.tablet} {
    margin-bottom: 28px;
  }

  ${media.mobile} {
    margin-bottom: 20px;
  }
`;

export const SortOptionsButtonWrapper = styled.div`
  margin-bottom: 32px;

  ${media.tablet} {
    margin-bottom: 28px;
  }

  ${media.mobile} {
    margin-bottom: 20px;
  }
`;
