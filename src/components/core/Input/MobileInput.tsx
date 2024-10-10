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
    onCountryCodeChange: (code: string) => void;
    onMobileNumberChange: (number: string) => void;
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
    const handleCountryCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onCountryCodeChange(event.target.value);
    };

    const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onMobileNumberChange(event.target.value);
    };

    return (
        <div className={`mobile-input-container ${className}`}>
            <select
                value={selectedCountryCode}
                onChange={handleCountryCodeChange}
                className="country-code-select"
                {...register('countryCode', { required: 'Country code is required' })}
            >
                {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                        {/* {country.name} */}
                        {country.code}
                    </option>
                ))}
            </select>
            <input
                type="tel"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="mobile-number-input"
                placeholder="Enter mobile number"
                {...register('phoneNumber', { required: 'Phone number is required' })}
            />
        </div>
    );
};

export default MobileInput;