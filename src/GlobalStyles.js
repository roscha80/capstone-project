import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: var(--background);
  color: var(--fontcolor);
  
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  height: 100vh;
  width: 100vh;
}
input,
button,
textarea {
  font-size: inherit;
}

:root {
  --background: whitesmoke;
  --fontcolor: steelblue;
}

`

export default GlobalStyles
