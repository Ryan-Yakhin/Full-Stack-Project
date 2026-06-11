import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

import ProtectedRoute from "../componenets/ProtectedRoute";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/edit-profile" element={
        <ProtectedRoute>
          <EditProfile />
        </ProtectedRoute>
      } />
    </Routes>
    
  );
}