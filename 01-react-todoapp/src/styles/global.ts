import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;

    font-family: Roboto;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #4F6367;
  }
  
  p {
    font-size: 16px;
  }

  h1 {
    color: #4F6367;
  }
`;
