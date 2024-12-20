import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./components/product/ProductDetail";
import ProductSearch from "./components/product/productSearch";
import Login from "./components/user/login";
import Register from "./components/user/register";






function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <div class="container container-fluid">
       
          <ToastContainer theme="dark"/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search/:keyword" element={<ProductSearch/>}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
          </div>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
