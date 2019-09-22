import React, { Component, Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='navbar bg-primary'>
        <Navbar />
        <UserItem />
      </div>
    )
  }
}

export default App
