export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_START,
    loading: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    loading: false,
    isAuthenticated: true,
    user
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    loading: false,
    isAuthenticated: false,
    message
  }
}

function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: {  }
  }

}
