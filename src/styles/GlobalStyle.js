import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
     
     reset css
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
  
  
  /* 
   공통으로 사용하는 css 변수 정리
  */
  :root {
    --black: #14151A;
    --gray_888790: #888790;
    --gray_A2A2AC: #A2A2AC;
    --gray_DDDCDF: #DDDCDF;
    --white_79747E: #79747E;
    --white_FAFAFB: #FAFAFB;
    --white_A4A1AA: #A4A1AA;
    --white_FFFFFF: #FFFFFF;
    --brand_FB545B: #FB545B;
    --brand_888790: #888790;
    --blue: #3E45EC;
    
    --modal-z-index: 9999;
  }
  
  body {
    font-family: "Pretendard", sans-serif;
  }
`;

export default GlobalStyle;
