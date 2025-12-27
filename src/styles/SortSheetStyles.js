import styled from "styled-components";
import CloseButtonIcon from "../assets/img/icon_close.svg";
import SortSelectedIcon from "../assets/img/icon_check.svg";

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
