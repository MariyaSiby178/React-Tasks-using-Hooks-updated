import React, { useState } from 'react';

const OtpInput = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = [];

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value !== '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1 && value !== '') {
        inputRefs[index + 1].focus();
      }

      if (newOtp.every((digit) => digit !== '')) {
        onComplete(newOtp.join(''));
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength="1"
          ref={(ref) => (inputRefs[index] = ref)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
