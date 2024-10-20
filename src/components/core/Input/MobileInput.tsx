import React from 'react';
import './MobileInput.css';

interface CountryCode {
    code: string;
    name: string;
}

const countryCodes: CountryCode[] = [
    { code: '+1', name: 'USA' },
    { code: '+91', name: 'India' },
    { code: '+44', name: 'UK' },
    // Add more country codes as needed
];

interface MobileInputProps {
    selectedCountryCode: string;
    mobileNumber: string;
    onCountryCodeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onMobileNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    register: any;
    className?: string;
}

const MobileInput: React.FC<MobileInputProps> = ({
    selectedCountryCode = "+91",
    mobileNumber,
    onCountryCodeChange,
    onMobileNumberChange,
    register,
    className = ''
}) => {

    const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mobileRegex = /^[0-9\b]+$/;
        if ((mobileRegex.test(event.target.value) || event.target.value === "") && event.target.value.length < 11) {
            console.log(mobileRegex.test(event.target.value))
            onMobileNumberChange(event);
        }
    };

    return (
        <div className={`mobile-input-container ${className}`}>
            <span className="country-code-select flex justify-center items-center" >+91</span>
            <input
                name='phoneNumber'
                type="tel"
                onChange={handleMobileNumberChange}
                className="mobile-number-input"
                placeholder="Enter mobile number"
                // {...register('phoneNumber', { required: 'Phone number is required' })}
                value={mobileNumber}
            />
        </div>
    );
};

export default MobileInput;