
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://otpless.com/auth.js";
    script.cid = "0ZX9N7GD18UJH5QTU3G9KJ4BB7KFO8JZ";
    script.async = true;

    document.body.appendChild(script);
    window.otpless = (otplessUser) => {
      let data=JSON.stringify(otplessUser);
      console.log(data)
      // data.email.name="vanda"
      // Example: Navigating to another page after successful authentication
      navigate("/profilepage",{ state: {data:data} });
    };
  }, [navigate]);

  return <div id="otpless-login-page" />;
}



