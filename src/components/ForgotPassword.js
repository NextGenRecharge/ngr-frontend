import React, { useState } from 'react';
import { Button, Container, Typography, Box, TextField, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [newMpin, setNewMpin] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleMpinChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newMpi = [...newMpin];
      newMpi[index] = value;
      setNewMpin(newMpi);

      // Automatically focus next input
      if (value && index < 3) {
        document.getElementById(`mpin-${index + 1}`).focus();
      }
    }
  };

  const handleResetPassword = () => {
    if (isOtpSent) {
      if (newMpin.join('').length === 4) {
        // Implement MPIN reset functionality here
        alert('MPIN reset successful');
        navigate('/login');
      } else {
        alert('Please enter a valid 4-digit MPIN.');
      }
    } else {
      if (contact) {
        // Implement OTP sending functionality here
        setIsOtpSent(true);
      } else {
        alert('Please enter your mobile number or email.');
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Box
        sx={{
          mt: 4,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: '100%',
          width: '400px',
          mx: 'auto',
          '@media (min-width: 1280px)': {
            width: '450px',
          },
          '@media (min-width: 960px) and (max-width: 1279px)': {
            width: '400px',
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Forgot PIN
        </Typography>

        {!isOtpSent ? (
          <>
            <TextField
              fullWidth
              label="Mobile Number or Email ID"
              value={contact}
              onChange={handleContactChange}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </>
        ) : (
          <>
            {/* OTP Input */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
              {otp.map((digit, index) => (
                <Grid item key={index} xs={3}>
                  <input
                    id={`otp-${index}`}
                    type="password"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength="1"
                    style={{
                      width: '40px',
                      height: '40px',
                      textAlign: 'center',
                      fontSize: '24px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <Typography variant="h6" gutterBottom>
              Enter New MPIN
            </Typography>
            
            {/* MPIN Input */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
              {newMpin.map((digit, index) => (
                <Grid item key={index} xs={3}>
                  <input
                    id={`mpin-${index}`}
                    type="password"
                    value={digit}
                    onChange={(e) => handleMpinChange(e, index)}
                    maxLength="1"
                    style={{
                      width: '40px',
                      height: '40px',
                      textAlign: 'center',
                      fontSize: '24px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleResetPassword}
            >
              Reset MPIN
            </Button>
          </>
        )}

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Link href="#" onClick={handleLoginRedirect} sx={{ textDecoration: 'none', color: 'primary.main' }}>
            Remembered your password? Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
