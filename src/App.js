import styled from 'styled-components/macro'
import CreatePage from './pages/CreatePage'
import UsersPage from './pages/UsersPage'
import { useState } from 'react'
import useLocalStorage from './sort/useLocalStorage'

function App() {
  const [users, setUsers] = useLocalStorage('users', [])
  const [currentPage, setCurrentPage] = useState('createPage')
  return (
    <AppWrapper>
      {currentPage === 'createPage' && (
        <CreatePage onGoBack={handleGoBack} onSubmit={handleCreatePage} />
      )}
      {currentPage === 'usersPage' && (
        <UsersPage users={users} goToCreatepage={handleGoToCreatePage} />
      )}
      {/* <CreatePage />
      <UsersPage users={userData} /> */}
    </AppWrapper>
  )
  function handleGoBack() {
    setCurrentPage('usersPage')
  }
  function handleGoToCreatePage() {
    setCurrentPage('createPage')
  }
  function handleCreatePage(newUser) {
    setUsers([newUser, ...users])
  }
}

export default App

const AppWrapper = styled.div`
  background: var(--background_dark);
`
