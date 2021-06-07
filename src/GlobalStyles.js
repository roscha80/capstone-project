import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
}
body {
  font-family: 'Oswald Yanone', sans-serif;
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
  --background_light: #DEF2F1;
  --background_dark: #3AAFA9;
  --fontcolor_light: #2B7A78;
  --fontcolor_dark: #DEF2F1;
  --contrast_color: #17252a
}

`

export default GlobalStyles
