import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  padding: 0 24px;
  max-width: 1200px;
  margin: 40px auto 0;
  ${mediaQueries.mobile} {
    margin: 28px auto 0;
  }
`;
