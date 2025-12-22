import styled, { css } from "styled-components";

export const DefaultButton = styled.button`
  height: ${({$buttonHeight}) => $buttonHeight && $buttonHeight}px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 17px;
  color: var(--white_FFFFFF);
  margin: 0;
  background-color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 37px;
  cursor: pointer;
  
  &:disabled {
    background-color: var(--gray_A2A2AC);
    border: 2px solid var(--gray_A2A2AC);
    cursor: inherit;
  }
  
  ${({$flexLayoutType}) => 
    $flexLayoutType === 'flex' ? 
    css`
      display: flex;
      width: 100%;
    `
    : 
    css`
      display: inline-flex;
      padding: 0 16px;
    `
  } 
  
  ${({$buttonVariant}) => 
    $buttonVariant === 'cancle' &&
    css`
      color: var(--blue);
      background-color: var(--white_FFFFFF);
      border: 2px solid var(--blue);
    `
  }
`;