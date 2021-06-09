import UsersPage from './pages/UsersPage'
import styled from 'styled-components/macro'
import { userData } from './data/data.json'

function App() {
  return (
    <AppWrapper>
      <UsersPage users={userData} />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  background: var(--background_dark);
`
