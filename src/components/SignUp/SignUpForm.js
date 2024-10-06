import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import signupNext from '../../asset/signupNext.png';
import "../../../src/App.css"; // Ensure your styles are linked properly

const SignupForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    zipCode: '',
    mobileNumber: '',
    email: '',
    referralCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <Container maxWidth="md" className="signup-container">
      <Box 
        className="signup-form"
      >
        <Typography variant="h4" gutterBottom>Sign Up</Typography>
        <form>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            onChange={handleChange}
            sx={{ mb: 1 }}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            sx={{ mb: 1 }}
            required
          />
          <TextField
            fullWidth
            label="City"
            name="city"
            onChange={handleChange}
            sx={{ mb: 1 }}
            required
          />
          <TextField
            fullWidth
            label="Zip Code"
            name="zipCode"
            onChange={handleChange}
            sx={{ mb: 1 }}
            required
          />
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobileNumber"
            onChange={handleChange}
            sx={{ mb: 1 }}
            required
          />
          <TextField
            fullWidth
            label="Email ID"
            name="email"
            onChange={handleChange}
            sx={{ mb: 1 }}
            required
          />
          <TextField
            fullWidth
            label="Referral Code (Optional)"
            name="referralCode"
            onChange={handleChange}
            sx={{ mb: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </form>
      </Box>
      <Box className="signup-image">
        <img src={signupNext} alt="Description of the icon" className="png-image" />
      </Box>
    </Container>
  );
};

export default SignupForm;
