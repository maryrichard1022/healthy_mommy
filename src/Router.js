import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Cart from "./pages/Cart";
import PaySucess from "./pages/PaySucess";
import Payment from "./pages/Payment";
import MyPage from "./pages/MyPage";
import Location from "./pages/Location";
import Login from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/PaySucess" element={<PaySucess />} />
        <Route exact path="/MyPage" element={<MyPage />} />
        <Route exact path="/Location" element={<Location />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
