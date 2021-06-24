import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
:root {
  --background_light: #DEF2F1;
  --background_dark: #3AAFA9;
  --fontcolor_light: #2B7A78;
  --fontcolor_dark: #DEF2F1;
  --contrast_color: #17252a;
  --active: #6bcfd1;
  --highlight: #FFC0CB;
}
  
}
body {
  font-family: 'Oswald', sans-serif;
  font-size: 112.5%;
  max-width: 450px;
  align-items: center;
  background-color: var(----background_dark);

  
}
input,
button,
textarea {
  font-size: inherit;
}

`

export default GlobalStyles
