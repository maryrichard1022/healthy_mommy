import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import MyPage from "./pages/MyPage";
import Cart from "./pages/Cart";

import Payment from "./pages/Payment";
import PaySuccess from "./pages/PaySuccess";
import PayResult from "./components/PayResult";
import PayReady from "./components/PayReady";
import Location from "./pages/Location";
import Detail from "./pages/Detail";

import ALL from "./pages/ALL";
import Supplements from "./pages/Supplements";
import SportsWear from "./pages/SportsWear";
import FitnessEquipment from "./pages/FitnessEquipment";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/PayResult" element={<PayResult />} />
        <Route path="/PayReady" element={PayReady} />
        <Route exact path="/MyPage" element={<MyPage />} />
        <Route exact path="/Location" element={<Location />} />
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PaySuccess" element={<PaySuccess />} />
        <Route exact path="/Detail" element={<Detail />} />

        <Route path="/ALL" element={<ALL />} />
        <Route path="/Supplements" element={<Supplements />} />
        <Route path="/SportsWear" element={<SportsWear />} />
        <Route path="/FitnessEquipment" element={<FitnessEquipment />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
