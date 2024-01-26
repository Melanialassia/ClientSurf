import "./App.css";

import { Routes, Route } from "react-router-dom";
import { FloatButton } from "antd";
import styles from './App.module.css'

//COMPONENTS
import AdminDashboard from "./adminComponents/features/AdminDashboard/roots/AdminDashboard";
import EditUserData from "./userComponents/features/UserDashboard/container/EditUserData";
import ChangePolicy from "./components/features/ChangePolicy/components/ChangePolicy";
import FavoritesPage from "./components/features/FavoritesPage/root/FavoritesPage";
import MyAccount from "./userComponents/features/UserDashboard/roots/MyAccount";
import ProductPage from "./components/features/ProductPage/roots/ProductPage";
import MySales from "./userComponents/features/UserDashboard/roots/MySales";
import LoginForm from "./components/features/LoginForm/roots/LoginForm";
import Services from "./components/features/Services/roots/Services";
import Details from "./components/features/Details/roots/Details";
import AboutUs from "./components/features/About/roots/AboutUs";
import Header from "./components/features/Header/roots/Header";
import Footer from "./components/features/Footer/roots/Footer";
import Login from "./components/features/Login/roots/Login";
import Faq from "./components/features/Faq/components/Faq";
import Home from "./components/features/Home/roots/Home";
import Cart from "./components/features/Cart/roots/Cart";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/create" element={<LoginForm />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/change-policy" element={<ChangePolicy />} />
        <Route path="/edit-personaldata" element={<EditUserData />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/my-buys" element={<MySales/>} />
      </Routes>
      <a href="https://api.whatsapp.com/send?phone=5493415948636" target="_blank">
        <img src="/assets/images/whatsapp.png" alt="" className={styles.image}/>
      </a>
      <FloatButton.BackTop
        style={{
          height: "8vh",
          width: "8vh",
          padding: 10,
          backgroundColor: "#30445c",
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
