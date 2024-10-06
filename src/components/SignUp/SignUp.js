import React, { useState } from 'react';
import MpinSetup from './MpinSetUp';
import OtpVerification from './OtpVerification';
import { CssBaseline, Box } from '@mui/material';
import SignupForm from './SignUpForm';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [mpin, setMpin] = useState('');

  const handleNext = (data) => {
    setUserData(data);
    setStep(2);
  };

  const handleVerifyMpin = (mpin) => {
    setMpin(mpin);
    setStep(3);
  };

  const handleOtpSubmit = (otp) => {
    console.log('User Data:', userData);
    console.log('MPIN:', mpin);
    console.log('OTP:', otp);
    // Here you would typically verify the OTP and then log in the user
    alert('User signed up successfully!');
  };

  return (
    <Box>
      <CssBaseline />
      {step === 1 && <SignupForm onNext={handleNext} />}
      {step === 2 && <MpinSetup onVerify={handleVerifyMpin} />}
      {step === 3 && <OtpVerification onSubmit={handleOtpSubmit} />}
    </Box>
  );
};

export default Signup;
