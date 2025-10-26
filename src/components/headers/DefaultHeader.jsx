import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appliedConfig } from "../../config/commonConfig";
import NavLinks from "../../commonComponents/NavLinks";

const DefaultHeader = ({ appliedHeader }) => {
  const navigate = useNavigate();
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  // Use effect for scroll event listener, clean up on unmount
  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <>
      <header id="header" className="sticky-top-slide" data-bs-theme="dark">
        {/* Navbar */}
        <nav
          className={
            "primary-menu navbar navbar-expand-lg border-bottom-0  " +
            (stickyHeader ? "sticky-on " : " ") + (appliedConfig.isPrimaryBackground && 'navbar-default-active ')
          }
        >
          <div className="container-fluid px-3 px-md-4">
            {/* Logo */}
            <Link
              to="/"
              style={{ cursor: "pointer", textDecoration: 'none', fontWeight: 900, fontSize: '2rem', color: 'white' }}
              className="ms-2 ms-md-0"
              title="Sarod Maestro Rajeev Taranath"
            >
              <div style={{ textDecoration: 'none', fontWeight: 900, fontSize: '2rem', lineHeight: 1 }}>Rajeev Taranath</div>
            </Link>
            {/* Logo End */}
            <button
              className={
                "navbar-toggler " + (isNavModalClose ? "collapsed" : "show")
              }
              onClick={() => {
                setIsNavModalClose(!isNavModalClose);
              }}
              type="button"
              aria-label="Toggle navigation"
              style={{ outline: 'none', border: 'none', background: 'transparent' }}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={
                "collapse navbar-collapse justify-content-end " +
                (isNavModalClose ? " " : "show ")
              }
            >
              <ul className="navbar-nav">
                <NavLinks onClose={() => {
                  setIsNavModalClose(true);
                }} />
              </ul>
              <input type="button" className="btn-rounded" value="Donate" onClick={() => navigate('/donate')} />
            </div>
          </div>
        </nav>
        {/* Navbar End */}
      </header>
      {/* Spacer removed for better layout */}
      <style>{`
        @media (max-width: 575.98px) {
          #header {
            min-height: 70px;
          }
          .primary-menu {
            min-height: 70px;
            padding: 0 0.5rem;
          }
        }
        @media (min-width: 576px) and (max-width: 991.98px) {
          #header {
            min-height: 70px;
          }
          .primary-menu {
            min-height: 70px;
            padding: 0 1rem;
          }
        }
        @media (min-width: 992px) {
          #header {
            min-height: 80px;
          }
          .primary-menu {
            min-height: 80px;
            padding: 0 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default DefaultHeader;
