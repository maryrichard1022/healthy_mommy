import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Cart from "./pages/Cart";
import PaySucess from "./pages/PaySucess";
import Payment from "./pages/Payment";
import MyPage from "./pages/MyPage";
import Map from "./pages/Map";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/PaySucess" element={<PaySucess />} />
        <Route exact path="/MyPage" element={<MyPage />} />
        <Route exact path="/Map" element={<Map />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
