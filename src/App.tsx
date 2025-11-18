import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Fundraiser from "./components/Fundraiser";
import Faqs from "./components/Faqs";
import Blogs from "./components/Blogs";
// import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
// import Testimonials from "./components/Footer/Testimonials";
import About from "./components/About";
import NotFoundPage from "./components/NotFound";
import BlogPage from "./components/Blogs/BlogPage";
import { AiLeverage } from "./components/Blogs/Pages/AiLeverage";
import {csrContentData} from "./components/Blogs/Pages/CSR";
import {volunteerContentData} from "./components/Blogs/Pages/Volunteer";
import {csrFundingContentData} from "./components/Blogs/Pages/CSRfunding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasicLayout />} >
          <Route index element={<Home />} />
          <Route path="/fund-form" element={<Fundraiser />} />
          <Route path="/faqs" element={<Faqs />} />
          {/* <Route path="/contact" element={<Navbar />} /> */}
          <Route path="/blogs"  element={<Blogs />} />
          <Route path="/blogs/aileverage" element={<BlogPage items={AiLeverage} />} />
          <Route path="/blogs/csr-impact" element={<BlogPage items={csrContentData} />} />
          <Route path="/blogs/life-of-volunteer" element={<BlogPage items={volunteerContentData} />} />
          <Route path="/blogs/csr-funding" element={<BlogPage items={csrFundingContentData} />} />

          <Route path="/signup" element={<SignIn initialView="signup" />} />
          <Route path="/signin" element={<SignIn initialView="signin" />} />

          <Route path="/dashboard" element={<Dashboard />} />


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}


function BasicLayout() {
  // className="px-4 sm:px-6 md:px-8 lg:px-pd-lg"
  return (
    <div >
      <Navbar />
      <Outlet />
        <Footer />
    </div>
  );
}


export default App;
