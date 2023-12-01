import React from "react";
import LoginPage from "./components/LoginPage";
import { Route, Routes,} from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "./App.css"
const App = () => {
  return (
    // <LoginPage/>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/profilePage" element={<ProfilePage/>} />
      </Routes>
  
  );
}
export default App;
