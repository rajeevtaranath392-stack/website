import { useLocation, Outlet } from 'react-router-dom';
import "./App.scss";
import { useEffect, useState } from "react";
import { appliedConfig } from "./config/commonConfig";
import { Tooltip } from "./components/Tooltip";
import DefaultHeader from "./components/headers/DefaultHeader";
import Footer from "./components/Footer";
import SpecialQuote from './components/SpecialQuote';
import { quoteByRajeevTaranath } from './config/dataConfig';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const appliedHeader = appliedConfig.appliedHeader;
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");
    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const path = location.pathname;
    if (path === "/") {
      setQuoteIndex(0);
    } else if (path === "/videos") {
      setQuoteIndex(1);
    } else if (path === "/press") {
      setQuoteIndex(2);
    } else if (path === "/gallery") {
      setQuoteIndex(3);
    } else if (path === "/quotes") {
      setQuoteIndex(4);
    } else if (path === "/discography") {
      setQuoteIndex(5);
    } else if (path === "/contact") {
      setQuoteIndex(0);
    } else {
      setQuoteIndex(0);
    }
  }, [location.pathname]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {appliedConfig.isFrameLayout && (
        <div className="frame-outer">
          <div className="frame-top"></div>
          <div className="frame-end"></div>
          <div className="frame-bottom"></div>
          <div className="frame-start"></div>
        </div>
      )}
      <DefaultHeader appliedHeader={appliedHeader} />
      <div id="main-wrapper" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div id="content" role="main" style={{ flex: 1 }}>
          <Outlet />
        </div>
        <SpecialQuote author={quoteByRajeevTaranath[quoteIndex].author} quote={quoteByRajeevTaranath[quoteIndex].quote} />
      </div>
      <Footer />
      {/* back to top */}
      <Tooltip text="Back to Top" placement="left">
        <span
          id="back-to-top"
          className="rounded-circle"
          style={{ display: scrollTopVisible ? "inline" : "none" }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </span>
      </Tooltip>
    </div>
  );
}

export default App;
