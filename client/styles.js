import css from 'styled-jsx/css';

// global styles
export const body = css.global`
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    font-family: inherit;
    text-transform: none;
    cursor: pointer;
  }
`;