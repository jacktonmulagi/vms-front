import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import BookAppointments from "../pages/BookAppointments";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/SignIn" element={<SignIn />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/book-appointment" element={<BookAppointments />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;
