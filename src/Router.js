import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Cart from "./pages/Cart";
import PaySucess from "./pages/PaySucess";
import Payment from "./pages/Payment";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/PaySucess" element={<PaySucess />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
