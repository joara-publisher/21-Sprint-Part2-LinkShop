import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const FormLabel = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--black);
  margin: 40px auto 16px;
  width: 696px;
`;

export const FormWrapper = styled.div`
  display: flex;
  background-color: var(--white_FAFAFB);
  margin: 0 auto;
  border-radius: 16px;
  padding: 22px 28px;
`;

export const AddButton = styled.button`
  border: none;
  background: var(--white_FFFFFF);
  color: var(--blue);
  font-size: 16px;
`;

export const TopMarginButton = styled.div`
  margin-top: 72px;
`;

export const PageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 121px auto;
  width: 696px;

    ${mediaQueries.tablet} {
      padding: 0 24px;
    }
      
    ${mediaQueries.mobile} {
      padding: 0 15px;
    }
`;

