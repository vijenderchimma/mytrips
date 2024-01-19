import { useState } from 'react';
import Header from '../Header';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


import './index.css';

const LogIn = (props) => {
    const navigate = useNavigate()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSuccess = (jwtToken) =>{
    const {history} = props
    Cookies.set("jwt_token",jwtToken,{expiry:1,path: "/"})
    history.push("/")
  }

  const onSubmitForm = async (event) => {
    event.preventDefault();
  
    const userDetails = { email, password };
    const headers = {
      'Content-Type': 'application/json',
    };
  
    try {
      const response = await axios.post('http://localhost:3001/login', userDetails, { headers });
      console.log('User details posted successfully:', response.data);
      if (response.status === 200) { // Assuming 200 is the success status
        console.log('User details posted successfully:', response.data);
        const jwtToken = response.data.token;
        onSubmitSuccess(jwtToken);
      }
    } catch (error) {
      console.error('Error posting user details:', error);
      console.log('Response status:', error.response.status);
      console.log('Response data:', error.response.data);
      console.log('Axios configuration:', error.config);
    }
  };

  const onTestNavigation = () => {
     const jwtToken = Cookies.get("jwt_token")
     if (jwtToken !== undefined){
        return navigate("/") 
     }
  }
  

  return (
    <>
      <Header />
      <div className="login-container">
        <h1 className="login-heading">User Login</h1>
        <form className="form-container" onSubmit={onSubmitForm}>
          <label htmlFor="email" className="label">
            USER EMAIL:
          </label>
          <input
            value={email}
            className="user-input"
            type="email"
            onChange={onChangeEmail}
            placeholder="Enter Email"
            id="email"
          />
          <label htmlFor="password" className="label">
            PASSWORD:
          </label>
          <input
            value={password}
            className="user-input"
            id="password"
            type="password"
            onChange={onChangePassword}
            placeholder="Enter Password"
          />
          <input type="submit" className="login-button" value="LogIn" />
        </form>
        <button onClick={onTestNavigation}>Test Navigation</button>
      </div>
    </>
  );
};

export default LogIn;
