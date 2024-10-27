import React, { Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
// import Loader from "./Components/Core/Loader";
import Loader from "./Components/Core/Loader/loader";
import "./styles.css";
const Home = React.lazy(() => import("./Pages/home"));
const About = React.lazy(() => import("./Pages/about"));
function App() {
  return (
    <>
      <ToastContainer />

      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
