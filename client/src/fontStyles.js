import { createGlobalStyle } from 'styled-components/macro'
import OswaldRegWoff from './fonts/Oswald-Regular.woff'
import OswaldLightWoff from './fonts/Oswald-Light.woff'

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Oswald';
    src: url(${OswaldRegWoff}) format('woff'),
    url(${OswaldLightWoff}) format('woff')  
}
`

export default FontStyles
