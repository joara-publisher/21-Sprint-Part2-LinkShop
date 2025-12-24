import styled from "styled-components";
import { media } from "./media";
import CloseButtonIcon from "../assets/img/icon_close.svg";
import SortSelectedIcon from "../assets/img/icon_check.svg";

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $backdrop }) =>
    $backdrop === "dim" &&
    ` position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7); 
      z-index: var(--modal-z-index);
  `}

  ${media.mobile} {
    align-items: ${({ $placement }) => $placement};
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

  ${({ $variant }) => modalVariantStyles[$variant || "default"]}
`;

export const modalVariantStyles = {
  default: ``,
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

// 리스트 페이지 모달 style
export const SheetTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  color: var(--black);
`;
export const SheetCloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 24px;
  width: 23px;
  height: 23px;
  background-image: url("${CloseButtonIcon}");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: center;
  background-color: var(--white_FFFFFF);
  padding: 0;
  border: none;
  cursor: pointer;
`;
export const SheetSortOption = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: var(--black);
  padding: 25px 0 15px;
  border-bottom: 1px solid var(--gray_DDDCDF);
  cursor: pointer;

  &.active {
    position: relative;
    font-weight: 700;
    color: var(--brand_FB545B);

    &:after {
      content: "";
      position: absolute;
      bottom: 15px;
      right: 0;
      width: 23px;
      height: 23px;
      background-image: url("${SortSelectedIcon}");
      background-repeat: no-repeat;
      background-size: 19px 14px;
      background-position: center;
    }
  }
`;
