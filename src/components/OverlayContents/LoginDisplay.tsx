import React, { useState, useContext } from "react";
import styles from './LoginDisplay.module.css';
import { BannerContext } from "../BannerContext";

const LoginDisplay: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const BannerContextValues = useContext(BannerContext);
  if (!BannerContextValues) {
      return null;
  }
  const { setLoginDisplayOpen } = BannerContextValues;

  const handleCloseClick = () => {
    setLoginDisplayOpen(false);
  };

  return (
    <div className={styles.Overlay}>
      <div className={styles.LoginContainer}>
        <button className={styles.CloseButton} onClick={handleCloseClick}>
          X
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.FormGroup}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={styles.FormGroup}>
            <label>Password:</label>
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className={styles.CreateUserButton} type="submit">
            Create User
          </button>
          <button className={styles.LoginButton} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginDisplay;