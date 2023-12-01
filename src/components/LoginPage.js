import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://otpless.com/auth.js";
    script.cid = "0ZX9N7GD18UJH5QTU3G9KJ4BB7KFO8JZ";
    script.async = true;

    document.body.appendChild(script);
    window.otpless = (otplessUser) => {
      console.log(JSON.stringify(otplessUser));
    };
  }, []);

  return <div id="otpless-login-page" />;
}



// import React, { useEffect, useState } from "react";
// import { Link} from "react-router-dom";

// const LoginPage = () => {
//   const [loginDetails, setLoginDetails] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");

//     script.src = "https://otpless.com/auth.js";
//     script.cid = "0ZX9N7GD18UJH5QTU3G9KJ4BB7KFO8JZ";
//     script.async = true;

//     document.body.appendChild(script);
//     window.otpless = (otplessUser) => {
//       console.log(JSON.stringify(otplessUser));
//       setLoginDetails(otplessUser);
//     };
//   }, []);
//   return (
//       <div id="otpless-login-page">
//       <div>
//         <h1>Login Page</h1>
//         {loginDetails && (
//           <div>
//             <h2>Login Details:</h2>
//             <pre>{JSON.stringify(loginDetails, null, 2)}</pre>
//             <Link to={{ pathname: "/profilePage", state: { loginDetails } }}/>
//           </div>
//         )}
//       </div>
//       </div>
//   );
// };

// export default LoginPage;