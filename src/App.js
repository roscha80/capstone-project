import UserDataPage from './pages/UserDataPage'
import styled from 'styled-components/macro'

function App() {
  return (
    <AppWrapper>
      <UserDataPage />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: grid;
  background: var(--background_dark);
  justify-content: center;
  width: fit-content;
`
