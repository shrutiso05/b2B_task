import React, { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    businessEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to Django backend to handle login
    // Use Axios or fetch to send the login data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render login form fields and buttons here */}
    </form>
  );
};

export default Login;
