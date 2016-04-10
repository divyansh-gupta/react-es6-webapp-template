import React from 'react';
import Login from '../components/Login'

export default class LoginPage extends React.Component {

  render = () => {
    return (
      <div className="container">
        <h2 className="text-center">Welcome!</h2>
        <hr />
        <Login/>
      </div>
    )
  }
}
