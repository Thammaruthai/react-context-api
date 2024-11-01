import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";
import React from "react";


export const UserDataContext = React.createContext();

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <UserDataContext.Provider
        value={{
          user: userData.username,
          profilePic: userData.avatar,
          userLevel: userData.level,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;


// อธิบายว่าทำไม context ถึงลดปัญหา ให้ให้เห็นภาพ และแสดงถึงปัญหาที่อาจจะเกิดในอนาคต สรุปแยกเป็นข้อๆ ชัดเจน 
