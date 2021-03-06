import { createGlobalStyle } from "styled-components";

/* @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'); */

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px "Roboto", sans-serif;
    background-color: #f0f0f5;
    -webkit-font-smoothing: antialiased
  }

  /* Esses components não herdam a font do body */
  input,
  button, 
  textarea {
    font: 400 18px "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
