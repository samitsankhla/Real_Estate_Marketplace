import React, { useEffect, useState } from 'react'
import {Navigate, Outlet, Route ,Routes, useLocation} from 'react-router-dom'
import LandingPage from './pagees/shared/LandingPage';
import Properties from './pagees/shared/Properties';
import  PropertyDetails from "./pagees/shared/PropertyDetails";
import Register from './pagees/auth/Register';
import VerifyEmail from './pagees/auth/VerifyEmail';
import Login from './pagees/auth/Login';
import ForgotPaasword from './pagees/auth/ForgotPaasword';
import ResetPassword from './pagees/auth/ResetPassword';
import Profile from './pagees/shared/Profile';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pagees/admin/AdminDashboard';
import AdminUsers from './pagees/admin/AdminUsers';
import SellerRequests from './pagees/admin/SellerRequests';
import AdminProperties from './pagees/admin/AdminProperties';
import AdminInquiries from './pagees/admin/AdminInquiries';
import AdminContact from './pagees/admin/AdminContact';
import SellerLayout from './components/SellerLayout';
import SellerDashboard from './pagees/seller/SellerDashboard';
import AddProperty from './pagees/seller/AddProperty';
import MyProperties from './pagees/seller/MyProperties';
import EditProperty from './pagees/seller/EditProperty';
import {
  ProtectedRoute,
    PublicRoute,
} from "./components/common/ProtectedRoute";
import { FaChevronUp } from 'react-icons/fa';
import { useAuth } from './context/AuthContext';
import Myinquiries from './pagees/buyer/Myinquiries';
import ChatMessage from './pagees/shared/ChatMessage';
import Contact from './pagees/shared/Contact';
import Wishlist from './pagees/buyer/Wishlist';

//to scroll to  top whenver the rouet is change
const ScrollToTopOnRouteChnage =()=>{
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
  },[pathname]);
  return null;
};

//for floating scrool to top btn
const ScrollTopButton = ()=>{
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const handleScroll =()=>{
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick =()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
  };
  return (
    <button onClick={handleClick}
      className={`fixed bottom-4 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${visible ? "scale-100 opacity-100 bg-emerald-500 text-white hover:bg-green-400 ": "pointer-events-none scale-0 opacity-0"}`}
    >
     <FaChevronUp size={22}/>
    </button>
  );
};

//smart layoutt wrapper for seller and buyer
const SellerLayoutWrapper = ()=>{
  const {user} = useAuth();
  return user?.role === "seller" ? <SellerLayout/> : <Outlet/>
}

const App = ()=> {
    useEffect(() => {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";

      return () => {
        document.body.style.overflowX = "";
        document.documentElement.style.overflowX = "";
      };
    }, []);  // prevent horizontal overflow on the whole application

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ScrollToTopOnRouteChnage />
      <ScrollTopButton />

      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPaasword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />

        <Route
          element={
            <ProtectedRoute allowedRoles={["buyer", "seller", "admin"]} />
          }
        >
          <Route element={<SellerLayoutWrapper />}>
            <Route path="/inquiries" element={<Myinquiries />} />
            <Route path="/chat-messages" element={<ChatMessage />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["seller"]} />}>
            {/* seller routes */}
            <Route element={<SellerLayout />}>
              <Route path="/dashboard" element={<SellerDashboard />} />
              <Route path="/seller-dashboard" element={<SellerDashboard />} />
              <Route path="/add-property" element={<AddProperty />} />
              <Route path="/my-properties" element={<MyProperties />} />
              <Route path="/edit-property/:id" element={<EditProperty />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            {/* admin routes */}
            <Route element={<AdminLayout />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route
                path="/admin/seller-requests"
                element={<SellerRequests />}
              />
              <Route path="/admin/properties" element={<AdminProperties />} />
              <Route path="/admin/inquiries" element={<AdminInquiries />} />
              <Route path="/admin/contacts" element={<AdminContact />} />
            </Route>
          </Route>
        </Route>

        <Route path="" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App
