import { Switch, Route, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styled from 'styled-components/macro'

import CreatePage from './pages/CreatePage'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

const axios = require('axios')

function App() {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(error => console.error(error))
  }, [])

  console.log(users)

  return (
    <AppWrapper>
      <Switch>
        <Route path="/" exact>
          <HomePage title="Home" />
        </Route>
        <Route path="/createPage">
          <CreatePage onSubmit={handleCreatePage} title="CreatePage" />
        </Route>
        <Route path="/usersPage">
          <UsersPage
            users={users}
            deleteUser={handleDeleteUser}
            title="UsersPage"
          />
        </Route>
      </Switch>
      <Route paths={['/', 'createPage', 'usersPage']}>
        <NavBar
          pages={[
            { title: 'Home', id: '/' },
            { title: 'Create a new user', id: 'createPage' },
            { title: 'Users', id: 'usersPage' },
          ]}
        />
      </Route>
    </AppWrapper>
  )

  function handleCreatePage(user) {
    axios
      .post('/api/users', user)
      .then(res => setUsers([...users, res.data]))
      .catch(error => console.log(error))
    history.push('usersPage')
  }

  function handleDeleteUser(id) {
    const updatedUsers = users.filter(user => user._id !== id)
    setUsers(updatedUsers)

    axios
      .delete(`/api/users/${id}`)
      .then(res =>
        fetch('/api/users')
          .then(res => res.json())
          .then(users => setUsers(users))
      )
      .catch(error => console.log(error))
  }
}

export default App

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  margin: auto;
  overflow-y: scroll;
`
