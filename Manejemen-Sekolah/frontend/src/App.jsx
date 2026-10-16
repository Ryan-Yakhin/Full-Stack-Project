import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import Teachers from "./pages/Teachers";
import Reports from "./pages/Reports";
import StudentReports from "./pages/StudentReports";
import TeacherReports from "./pages/TeacherReports";
import ProtectedRoute from "./components/ProtectedRoute";

function Private({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <Private>
              <Dashboard />
            </Private>
          }
        />

        <Route
          path="/students"
          element={
            <Private>
              <Students />
            </Private>
          }
        />

        <Route
          path="/classes"
          element={
            <Private>
              <Classes />
            </Private>
          }
        />

        <Route
          path="/teachers"
          element={
            <Private>
              <Teachers />
            </Private>
          }
        />

        <Route
          path="/reports"
          element={
            <Private>
              <Reports />
            </Private>
          }
        />

        <Route
          path="/studentreports"
          element={
            <Private>
              <StudentReports />
            </Private>
          }
        />

        <Route
          path="/teacherreports"
          element={
            <Private>
              <TeacherReports />
            </Private>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
