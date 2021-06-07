import { createGlobalStyle } from 'styled-components/macro'
import OswaldLightWoff from './fonts/Oswald-Light.woff'
import OswaldRegWoff from './fonts/Oswald-Regular.woff'
import YanoneBoldWoff from './fonts/YanoneKaffeesatz-Bold.woff'
import YanoneRegWoff from './fonts/YanoneKaffeesatz-Regular.woff'

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Oswald Yanone';
    src: url(${OswaldLightWoff}) format('woff'),
    url(${OswaldRegWoff}) format('woff'),
    url(${YanoneRegWoff})format('woff'),
    url(${YanoneBoldWoff})format('woff');
}
`

export default FontStyles
