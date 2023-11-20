import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    businessEmail: '',
    password: '',
    retypePassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to Django backend to handle signup
    // Use Axios or fetch to send the form data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields and buttons here */}
    </form>
  );
};

export default Signup;
