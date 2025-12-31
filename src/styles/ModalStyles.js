import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: var(--modal-z-index);

  ${mediaQueries.mobile} {
    align-items: ${({ $variant }) => ($variant === "modal" ? "center" : "end")};
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  background: var(--white_FFFFFF);
  box-sizing: border-box;
  animation: modalFadeIn 0.2s ease-out;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${({ $variant }) => modalVariantStyles[$variant || "modal"]}
`;

export const modalVariantStyles = {
  modal: `
    max-width: 343px;
    width: 100%;
    padding: 54px 24px 24px;
    border-radius: 30px;
    text-align: center;
  `,
  sheet: `
    max-width: 375px;
    width: 100%;
    padding: 39px 24px 62px;
    border-radius: 24px;
    
    ${mediaQueries.mobile} {
      border-radius: 24px 24px 0 0;
      padding-bottom: 173px;
    }
  `,
};
export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const ModalDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(20, 21, 26, 1);

  margin-top: 14px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid var(--gray_D9D9D9);
  margin-bottom: 20px;
  font-size: 14px;
  box-sizing: border-box;
  &::placeholder {
    color: rgba(136, 135, 144, 1);
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 37px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $variant }) =>
    $variant === "delete" ? "rgba(62, 69, 236, 1)" : "#7f81869d"};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const PasswordLabel = styled.div`
  text-align: left;
  margin: 20px 0 8px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 14px;
  padding-top: 12px;
`;
