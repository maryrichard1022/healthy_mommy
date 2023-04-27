import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";

import MyPage from "./pages/MyPage";
import Cart from "./pages/Cart";

import Payment from "./pages/Payment";
import PaySuccess from "./pages/PaySuccess";
import PayResult from "./components/PayResult";
import PayReady from "./components/PayReady";
import Location from "./pages/Location";

import ALL from "./pages/ALL";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route path="/PayResult" element={<PayResult />} />
        <Route path="/PayReady" exact={true} component={PayReady} />
        <Route exact path="/MyPage" element={<MyPage />} />
        <Route exact path="/Location" element={<Location />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/PaySuccess" element={<PaySuccess />} />

        <Route path="/ALL" element={<ALL />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
