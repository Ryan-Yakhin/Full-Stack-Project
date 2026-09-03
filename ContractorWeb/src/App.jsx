import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicePage from "./pages/ServicePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan/:slug" element={<ServicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}