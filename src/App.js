import styled from 'styled-components'

function App() {
  return (
    <div>
      <DarkTheme>Hello Rob</DarkTheme>
      <LightTheme>Hello Rob</LightTheme>
    </div>
  )
}

export default App

const DarkTheme = styled.div`
  text-align: center;
  padding: 10px;
  width: 200px;
  height: 50px;
  color: var(--fontcolor_dark);
  background-color: var(--background_dark);
  border-color: var(--contrast_color);
  border: solid 2px;
`

const LightTheme = styled.div`
  text-align: center;
  padding: 10px;
  width: 200px;
  height: 50px;
  color: var(--fontcolor_light);
  background-color: var(--background_light);
  border-color: var(--contrast_color);
  border: solid 2px;
`
