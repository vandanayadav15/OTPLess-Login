import { useLocation } from "react-router-dom";
import React from "react";

const ProfilePage = () => {
  let location = useLocation();
  let finalData = location.state ? location.state.data : null;
  let convertData = JSON.parse(finalData);
  // console.log(converData);
  return (
    <div>
      <h1 style={{ color: "blue" }}>Login Details</h1>
      <h2 style={{ color: "white" }}>Name : {convertData.email.name}</h2>
      <h2 style={{ color: "white" }}>Email : {convertData.email.email}</h2>
      <h2 style={{ color: "white" }}>
        Mobile Number : {convertData.mobile.number}
      </h2>
    </div>
  );
};

export default ProfilePage;


