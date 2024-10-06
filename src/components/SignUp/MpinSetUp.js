import React, { useState } from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';

const MpinSetup = ({ onVerify }) => {
  const [mpin, setMpin] = useState(['', '', '', '']);
  const [confirmMpin, setConfirmMpin] = useState(['', '', '', '']);

  const handleChange = (e, index, setMpinFunc) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newMpin = [...mpin];
      newMpin[index] = value;
      setMpinFunc(newMpin);

      // Automatically focus next input
      if (value && index < 3) {
        document.getElementById(`${e.target.id.split('-')[0]}-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    if (mpin.join('') === confirmMpin.join('') && mpin.join('').length === 4) {
      onVerify(mpin.join(''));
    } else if (mpin.join('').length !== 4) {
      alert('Please enter a valid 4-digit MPIN.');
    } else {
      alert('MPINs do not match!');
    }
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
          Set Your 4-Digit MPIN
        </Typography>
        
        {/* First Row - Enter MPIN */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          {mpin.map((digit, index) => (
            <Grid item key={index} xs={3}>
              <input
                id={`mpin-${index}`}
                type="password"
                value={digit}
                onChange={(e) => handleChange(e, index, setMpin)}
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
          Confirm Your MPIN
        </Typography>

        {/* Second Row - Confirm MPIN */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          {confirmMpin.map((digit, index) => (
            <Grid item key={index} xs={3}>
              <input
                id={`confirmMpin-${index}`}
                type="password"
                value={digit}
                onChange={(e) => handleChange(e, index, setConfirmMpin)}
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
          sx={{ mt: 3 }}
          onClick={handleVerify}
        >
          Verify MPIN
        </Button>
      </Box>
    </Container>
  );
};

export default MpinSetup;
