import React, { useState } from 'react';
import './NewCandidate.css'; // Import your CSS file

const NewCandidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    city: '',
    state: '',
    phno: '',
    email: '',
    aadhar: '',
    pan: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(previousFormData => ({
      ...previousFormData,
      [name]: newValue
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Optionally, you can clear the form fields after submission
    setFormData({
      name: '',
      dob: '',
      gender: '',
      city: '',
      state: '',
      phno: '',
      email: '',
      aadhar: '',
      pan: ''
    });
  };

  return (
    <div>
      <h1>Candidate Form</h1>
      <form onSubmit={handleSubmit}>
        <h3>Personal Info</h3>

        <label htmlFor='name'>Full Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} /><br /><br />

        <label htmlFor='dob'>Date of Birth</label>
        <input type='date' name='dob' value={formData.dob} onChange={handleChange} /><br /><br />

        <label>Gender:</label><br />
        <input type='radio' name='gender' value="female" checked={formData.gender === "female"} onChange={handleChange} />
        <label>Female</label>
        <input type='radio' name='gender' value="male" checked={formData.gender === "male"} onChange={handleChange} />
        <label>Male</label><br /><br />

        <label htmlFor='city'>City</label>
        <input type='text' name='city' value={formData.city} onChange={handleChange} /><br /><br />

        <label htmlFor="state">State:</label>
        <select id="state" name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select your state</option>
          <option value="andhra_pradesh">Andhra Pradesh</option>
          <option value="arunachal_pradesh">Arunachal Pradesh</option>
          <option value="bihar">Bihar</option>
        </select><br /><br />

        <label htmlFor='phno'>Phone Number</label>
        <input type='text' name='phno' value={formData.phno} onChange={handleChange} /><br /><br />

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} /><br /><br />

        <label htmlFor='aadhar'>Aadhar Number</label>
        <input type='text' name='aadhar' value={formData.aadhar} onChange={handleChange} /><br /><br />

        <label htmlFor='pan'>Pan Number</label>
        <input type='text' name='pan' value={formData.pan} onChange={handleChange} /><br /><br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCandidate;
