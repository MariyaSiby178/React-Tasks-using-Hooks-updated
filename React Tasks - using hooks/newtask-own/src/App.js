// import logo from './logo.svg';
// import './App.css';
// import Todos from './Reducer';
// import 'bootstrap/dist/css/bootstrap.css';

// function App() {
//   return (
//     <Todos/>
//   );
// }

// export default App;

import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import OtpInput from "otp-input-react"
const App = () => {
  const [otp , setOtp] = useState("")
  return (
    <section className=''>
      
      <div className='card d-flex flex-column justify-content-center align-items-center p-4 gap-4'>
        <h1>
          OTP
        </h1>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          {/* <BsFillShieldLockFill size/> */}
         <label htmlFor='otp' className='mb-3'>Enter Your OTP</label> 
         <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disable={false} autoFocus></OtpInput>
         <button type='button' className='mt-3 btn btn-dark'>Verify OTP</button>
        </div>
      </div>

    </section>
  )
}
export default App;