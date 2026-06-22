import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import EditPost from "../pages/EditPost";
import UserProfile from "../pages/UserProfile";

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
      }/>
      <Route path="/edit-profile" element={
        <ProtectedRoute>
          <EditProfile />
        </ProtectedRoute>
      }/>
      <Route path="/create-post" element = {
        <ProtectedRoute>
          <CreatePost/>
        </ProtectedRoute>
      }/>
      <Route path="/home" element = {
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }/>
      <Route
        path="/edit-post/:id"
        element={
            <ProtectedRoute>
                <EditPost />
            </ProtectedRoute>
        }
    />
      <Route
        path="/user/:id"
        element={<UserProfile/>}
      />
    </Routes>
  );
}