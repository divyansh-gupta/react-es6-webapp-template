import React from 'react';

export default class Login extends React.Component {

  render = () => {
    return (
      <div className="jumbotron">
        <p>
          <strong>Login</strong>
        </p>
        <p>Ready to begin?</p>
        <form action="/userAuth/login" method="post" enctype="multipart/form-data">
          <ol className="lead">
            Username<input type="text" id="password" name="password"/>
            Password<input type="text" id="password" name="password"/>
            <br/>
            <input type="submit"></input>
          </ol>
        </form>
      </div>
    );
  }

}
