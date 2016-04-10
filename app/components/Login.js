import React from 'react';

export default class Login extends React.Component {

  render = () => {
    return (
      <div className="jumbotron">
        <p>
          <strong>Login</strong>
        </p>
        <p>Ready to begin?</p>
        <form action="/userAuth/login">
          <ol className="lead">
            <div>Username<input/></div>
            <div>Password<input/></div>
            <br/>
            <input type="submit"></input>
          </ol>
        </form>
      </div>
    );
  }

}
