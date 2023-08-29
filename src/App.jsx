import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses,Login,Signin} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer theme='colored' position='top-center'></ToastContainer>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signin"  element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;