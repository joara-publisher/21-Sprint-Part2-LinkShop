import styled from "styled-components";
import { media } from "./media";

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $backdrop }) =>
    $backdrop &&
    ` position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7); 
      z-index: var(--modal-z-index);
  `}

  ${media.mobile} {
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
  modal: ``,
  sheet: `
    max-width: 375px;
    width: 100%;
    padding: 39px 24px 62px;
    border-radius: 24px;
    
    ${media.mobile} {
      border-radius: 24px 24px 0 0;
      padding-bottom: 173px;
    }
  `,
};
