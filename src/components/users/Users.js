import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: '2',
        login: 'atmos',
        avatar_url: 'https://avatars3.githubusercontent.com/u/38?v=4',
        html_url: 'https://github.com/atmos'
      },
      {
        id: '3',
        login: 'errfree',
        avatar_url: 'https://avatars2.githubusercontent.com/u/44?v=4',
        html_url: 'https://github.com/errfree'
      },
      {
        id: '4',
        login: 'bmizerany',
        avatar_url: 'https://avatars2.githubusercontent.com/u/46?v=4',
        html_url: 'https://github.com/bmizerany'
      }
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
