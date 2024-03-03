import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPageOne from "pages/LandingPageOne";
import LandingPageSeven from "pages/LandingPageSeven";
import LandingPage from "pages/LandingPage";
import LandingPageFour from "pages/LandingPageFour";
import LandingPageFive from "pages/LandingPageFive";
import LandingPageTwo from "pages/LandingPageTwo";
import LandingPageThree from "pages/LandingPageThree";
import LandingPageSix from "pages/LandingPageSix";
import HomeLayout from "layout/HomeLayout";
import AboutUs from "pages/AboutUs";

const ProjectRoutes = () => {
  let element = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "/", element: <HomeLayout title={'Home'} /> },
    { path: "/aboutus", element: <AboutUs /> },


    { path: "*", element: <NotFound /> },
    {
      path: "landingpageone",
      element: <LandingPageOne />,
    },
    {
      path: "landingpageseven",
      element: <LandingPageSeven />,
    },
    {
      path: "landingpage",
      element: <LandingPage />,
    },
    {
      path: "landingpagefour",
      element: <LandingPageFour />,
    },
    {
      path: "landingpagefive",
      element: <LandingPageFive />,
    },
    {
      path: "landingpagetwo",
      element: <LandingPageTwo />,
    },
    {
      path: "landingpagethree",
      element: <LandingPageThree />,
    },
    {
      path: "landingpagesix",
      element: <LandingPageSix />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
