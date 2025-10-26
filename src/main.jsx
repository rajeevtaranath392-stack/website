import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sass/stylesheet.scss";

import "./index.scss";
import App from "./App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Intro from "./components/Intro";
import AboutUs from "./components/About";
import News from "./components/News";
import VideosPage from './components/Videos';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';
import Music from './components/Music';
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Donate from "./components/Donate";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Intro /> },
      {path: 'biography', element: <Biography />},
      { path: 'about', element: <AboutUs /> },
      { path: 'articles', element: <News /> },
      { path: 'videos', element: <VideosPage /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'quotes', element: <Quotes /> },
      { path: 'discography', element: <Music /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donate', element: <Donate /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <Terms /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
