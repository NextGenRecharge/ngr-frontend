import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const OtpVerification = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (e) => setOtp(e.target.value);

  const handleSubmit = () => {
    onSubmit(otp);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>OTP Verification</Typography>
        <form>
          <TextField
            fullWidth
            margin="normal"
            label="Enter OTP"
            maxLength={6}
            value={otp}
            onChange={handleOtpChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default OtpVerification;
