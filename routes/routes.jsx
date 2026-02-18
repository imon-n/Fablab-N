// src/routes/routes.jsx

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayouts/RootLayouts";

import Home from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import Courses from "../pages/Education/Courses";
import DigitalFabrication from "../pages/Research/DigitalFabrication";
import FabLab from "../pages/Facilities/FabLab";
import Notice from "../pages/Bulletin/Notice";
import Booking from "../pages/Booking/Booking";

import { ROUTES } from "./routePaths";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.COURSES, element: <Courses /> },
      { path: ROUTES.DIGITAL_FABRICATION, element: <DigitalFabrication /> },
      { path: ROUTES.FAB_LAB, element: <FabLab /> },
      { path: ROUTES.NOTICE, element: <Notice /> },
      { path: ROUTES.BOOKING, element: <Booking /> },
    ],
  },
]);
