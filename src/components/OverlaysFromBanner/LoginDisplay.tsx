import React, { useState, useContext } from "react";
import styles from './LoginDisplay.module.css';
import { UserLoginContext } from "../UserLoginContext";
import { BannerContext } from "../BannerContext";

type CreateUserDataType = {
  message: string, accessToken: string
}

type LoginDataType = {
  message: string, accessToken: string
}

const LoginDisplay: React.FC = () => {
  const [currentTypedUsername, setCurrentTypedUsername] = useState('');
  const [currentTypedPassword, setCurrentTypedPassword] = useState('');

  const handleCurrentTypedUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTypedUsername(event.target.value);
  };

  const handleCurrentTypedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTypedPassword(event.target.value);
  };

  const [showCreateUserFailedMessage, setShowCreateUserFailedMessage] = useState<boolean>(false);
  const [showLoginFailedMessage, setShowLoginFailedMessage] = useState<boolean>(false);

  const BannerContextValues = useContext(BannerContext);
  if (!BannerContextValues) {
      return null;
  };
  const { setLoginDisplayOpen, setUsernameToDisplay } = BannerContextValues;

  const UserLoginContextValues = useContext(UserLoginContext);
  if (!UserLoginContextValues) {
    return null;
  };
  const { setCurrentUserAccessToken } = UserLoginContextValues;

  const handleCloseClick = () => {
    setLoginDisplayOpen(false);
  };

  const handleCreateUserPressed = () => {
    // const url = '/create_user'
    const url = 'http://127.0.0.1:5000/create_user'
    const requestData = {
      username: currentTypedUsername,
      password: currentTypedPassword
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then((data: CreateUserDataType) => handleCreateUserAPIResponse(data))
    .catch(error => console.log('Create User Request Error:', error));
  };

  const handleCreateUserAPIResponse = (data: CreateUserDataType) => {
    if (data.message === 'Failure') {
      setShowCreateUserFailedMessage(true);
    }
    else {
      setShowCreateUserFailedMessage(false);
      setLoginDisplayOpen(false);
      setCurrentUserAccessToken(data.accessToken);
      setUsernameToDisplay(currentTypedUsername);
    }
  };

  const handleLoginPressed = () => {
    // const url = '/login'
    const url = 'http://127.0.0.1:5000/login'
    const requestData = {
      username: currentTypedUsername,
      password: currentTypedPassword
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then((data: LoginDataType) => handleLoginAPIResponse(data))
    .catch(error => console.log('Login Request Error:', error));
  };

  const handleLoginAPIResponse = (data: LoginDataType) => {
    if (data.message === 'Failure') {
      setShowLoginFailedMessage(true);
    }
    else {
      setShowLoginFailedMessage(false);
      setLoginDisplayOpen(false);
      setCurrentUserAccessToken(data.accessToken);
      setUsernameToDisplay(currentTypedUsername);
    }
  };

  return (
    <div className={styles.Overlay}>
      <div className={styles.LoginContainer}>
        <button className={styles.CloseButton} onClick={handleCloseClick}>
          X
        </button>
        <h2>Login</h2>
        <div className={styles.FormGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={currentTypedUsername}
            placeholder="Enter new or existing username..."
            onChange={handleCurrentTypedUsernameChange}
          />
        </div>
        <div className={styles.FormGroup}>
          <label>Password:</label>
          <input
            type="text"
            value={currentTypedPassword}
            placeholder="Enter new or existing password..."
            onChange={handleCurrentTypedPasswordChange}
          />
        </div>
        {showCreateUserFailedMessage && <div style={{paddingBottom: '15px'}}> 
        Create user failed: <br/> Username already exists.
        </div>}
        {showLoginFailedMessage && <div style={{paddingBottom: '15px'}}> 
        Login failed: <br/> Username or password incorrect.
        </div>}
        <button className={styles.CreateUserButton} onClick={handleCreateUserPressed}>
          Create User
        </button>
        <button className={styles.LoginButton} onClick={handleLoginPressed}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default LoginDisplay;