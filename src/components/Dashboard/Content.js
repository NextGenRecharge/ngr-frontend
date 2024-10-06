// Content.js
import React from 'react';
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';

const Content = ({ selectedItem }) => {
  if (selectedItem === 'Recharge') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Recharge Form
        </Typography>
        <TextField
          fullWidth
          label="Mobile Number"
          variant="outlined"
          margin="normal"
          inputProps={{ maxLength: 10 }}
        />
        <Select
          fullWidth
          variant="outlined"
          label="Operator & Circle"
          margin="normal"
          defaultValue=""
        >
          <MenuItem value="">
            <em>Select Operator & Circle</em>
          </MenuItem>
          <MenuItem value="operator1">Operator 1</MenuItem>
          <MenuItem value="operator2">Operator 2</MenuItem>
        </Select>
        <TextField
          fullWidth
          label="Plans"
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Proceed to Recharge
        </Button>
      </Box>
    );
  }

  if (selectedItem === 'Withdraw') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Withdraw Form
        </Typography>
        <Typography variant="body1" gutterBottom>
          Wallet Balance: $5000
        </Typography>
        <TextField
          fullWidth
          label="Enter Amount"
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Proceed to Withdraw
        </Button>
      </Box>
    );
  }

  if (selectedItem === 'Blockchain Report') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Blockchain Report
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here is the blockchain report information.
        </Typography>
      </Box>
    );
  }

  if (selectedItem === 'My Downline') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          My Downline
        </Typography>
        <Typography variant="body1" gutterBottom>
          Details about your downline.
        </Typography>
      </Box>
    );
  }

  if (selectedItem === 'Referral ID Details') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Referral ID Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          Details about your referral IDs.
        </Typography>
      </Box>
    );
  }

  if (selectedItem === 'Support') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Support
        </Typography>
        <Typography variant="body1" gutterBottom>
          Contact support information here.
        </Typography>
      </Box>
    );
  }

  if (selectedItem === 'Logout') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          You have been logged out.
        </Typography>
        <Typography variant="body1" gutterBottom>
          You will be redirected to the login page.
        </Typography>
      </Box>
    );
  }

  if (selectedItem === 'Dashboard') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Overview of your account and activities.
        </Typography>
      </Box>
    );
  }

  if (selectedItem === 'Profile') {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Profile
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your profile details.
        </Typography>
      </Box>
    );
  }

  return null;
};

export default Content;
