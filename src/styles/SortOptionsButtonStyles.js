import styled from "styled-components";
import filterIcon from "../assets/img/icon_arrow_down.svg";

export const SortButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 18px;
  color: var(--black);
  padding: 0;
  margin: 0;
  background-color: var(--white_FFFFFF);
  border: none;
  cursor: pointer;

  &:after {
    content: "";
    width: 12px;
    height: 12px;
    background-image: url("${filterIcon}");
    background-repeat: no-repeat;
    background-size: 7px 6px;
    background-position: center calc(50% + 1px);
  }
`;
