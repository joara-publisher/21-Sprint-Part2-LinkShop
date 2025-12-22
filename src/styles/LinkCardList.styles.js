import styled from "styled-components";

export const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 가로 2 */
  grid-template-rows: repeat(3, auto);  /* 세로 3 */
  gap: 8px;
`;
export const ShopCard =styled.div`
 display:flex;
  flex-direction: column;
  border:1px solid black;
  border-radius:10px;
  width:587px;
  height:237px;
  justify-content:center;
`;
export const ShopItem=styled.div`
   display: flex;

`
export const ProductItem=styled.div`
  display: flex;
`
export const ShopText=styled.div`
  display:flex;
   flex-direction: column;
`