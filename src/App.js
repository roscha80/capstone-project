import styled from 'styled-components/macro'
import CreatePage from './pages/CreatePage'
import UsersPage from './pages/UsersPage'
import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [users, setUsers] = useLocalStorage('users', [])
  const [currentPage, setCurrentPage] = useState('createPage')
  return (
    <AppWrapper>
      {currentPage === 'createPage' && (
        <CreatePage
          onGoBack={() => setCurrentPage('usersPage')}
          onSubmit={handleCreatePage}
        />
      )}
      {currentPage === 'usersPage' && (
        <UsersPage
          users={users}
          goToCreatepage={() => setCurrentPage('createPage')}
        />
      )}
    </AppWrapper>
  )

  function handleCreatePage(newUser) {
    setUsers([newUser, ...users])
  }
}

export default App

const AppWrapper = styled.div`
  background: var(--background_dark);
`
