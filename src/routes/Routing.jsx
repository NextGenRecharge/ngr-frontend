import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../components/Dashboard/Home';
import Login from '../pages/Login/Login';
import MPin from '../pages/MPin/MPin';
import PublicRoute from './PublicRoute';
import ForgotPassword from '../components/ForgotPassword';
import OTPVerify from '../pages/OTPVerify/OTPVerify';
import CreateAccount from '../pages/CreateAccount/CreateAccount';
import AccountSuccessful from '../pages/AccountSuccessful/AccountSuccessful';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoute />} >
                    <Route path="/signup" element={<Login />} />
                    <Route path="/otp-verify" element={<OTPVerify />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path='/mpin' element={<MPin />} />
                    <Route path='/create-account' element={<CreateAccount />} />
                    <Route path='/account-created' element={<AccountSuccessful />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Routing;