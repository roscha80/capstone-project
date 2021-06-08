import UsersPage from './pages/UsersPage'
import styled from 'styled-components/macro'

function App() {
  return (
    <AppWrapper>
      <UsersPage />
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
