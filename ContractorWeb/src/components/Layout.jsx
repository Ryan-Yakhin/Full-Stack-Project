import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";
import ScrollToHash from "./ScrollToHash";

export default function Layout() {
  return (
    <div className="font-[Inter]">
      <ScrollToHash />
      <Navbar />
      <WhatsAppButton />
      <Outlet />
      <Footer />
    </div>
  );
}