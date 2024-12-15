import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/Dashboard/Home';
import Login from '../pages/Login/Login';
import MPin from '../pages/MPin/MPin';
import PublicRoute from './PublicRoute';
import ForgotPassword from '../components/ForgotPassword';
import OTPVerify from '../pages/OTPVerify/OTPVerify';
import CreateAccount from '../pages/CreateAccount/CreateAccount';
import AccountSuccessful from '../pages/AccountSuccessful/AccountSuccessful';
import Landing from '../components/Landing/Landing';
import AboutUs from "../pages/About/AboutUs"; // Adjust the path as needed
import TermsCondition from "../pages/TermsCondition/TermsCondition";
import WithNavbar from '../components/WithNavbar/WithNavbar';
import Dashboard from '../components/Dashboard/Dashboard';
import Subscription from '../components/Subscription/Subscription';
import RechargePlans from "../components/RechargePlans/RechargePlans";
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import MyAccount from '../components/core/MyAccount/MyAccount';
import HelpSupport from '../components/HelpSupport/HelpSupport';
const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoute />} >
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/termsCondition" element={<TermsCondition />} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="/signup" element={<Login />} />
                    <Route path="/otp-verify" element={<OTPVerify />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path='/mpin' element={<MPin />} />
                    <Route path='/create-account' element={<CreateAccount />} />
                    <Route path='/account-created' element={<AccountSuccessful />} />

                </Route>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />} >
                    <Route element={<WithNavbar />} >
                        <Route path="/home" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/subscription" element={<Subscription />} />
                        <Route path="/my-account" element={<MyAccount />} />
                        <Route path="/support" element={<HelpSupport />} />
                        <Route path="*" element={<div>Page Not found</div>} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default Routing;