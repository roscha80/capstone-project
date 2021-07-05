import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
:root {
  --background: ${({ theme }) => theme.colors.background};
  --background_switch: ${({ theme }) => theme.colors.background_switch};
  --fontcolor: ${({ theme }) => theme.colors.fontcolor};
  --fontcolor_switch: ${({ theme }) => theme.colors.fontcolor_switch};
  --background_contrast: ${({ theme }) => theme.colors.contrast_color};
  --fontcolor_contrast: ${({ theme }) => theme.colors.contrast_color};
  --fontcolor_active: ${({ theme }) => theme.colors.active};
  --background_active: ${({ theme }) => theme.colors.active};
  --fontcolor_highlight: ${({ theme }) => theme.colors.highlight};
  --background_highlight: ${({ theme }) => theme.colors.highlight};
}
  
}
body {
  font-family: 'Oswald', sans-serif;
  font-size: 112.5%;
  max-width: 450px;
  align-items: center;
  background:${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

}
input,
button,
textarea {
  font-size: inherit;
}

`

export default GlobalStyles
