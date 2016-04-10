import React from 'react';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log(this.state, 'state');
  }

  render = () => {
    return (
      <div className="jumbotron">
        <p>
          <strong>Login</strong>
        </p>
        <p>Ready to begin?</p>
        <form onChange={::this.handleChange} onSubmit={::this.onSubmit}>
          <ol className="lead">
            <fieldset>
              <label htmlFor="username">Username:&nbsp;</label>
              <input type="text" name="username" placeholder="Username" value={this.state.username} />
              <br/>
              <label htmlFor="password">Password:&nbsp;&nbsp;</label>
              <input type="password" name="password" placeholder="Password" value={this.state.password} />
              <br/><br/>
              <input type="submit" value="Login"></input>
            </fieldset>
          </ol>
        </form>
      </div>
    );
  }

}
