import React from "react";
import { useRoutes } from "react-router-dom";
import Home1 from "pages/Home1";
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
import { Home, AboutUs, Banquet, ContactUs, Events, Faqs, Restaurant, Rooms } from "pages";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    // { path: "/", element: <Home1 /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/rooms", element: <Rooms /> },
    { path: "/banquet", element: <Banquet /> },
    { path: "/restaurant", element: <Restaurant /> },
    { path: "/events", element: <Events /> },
    { path: "/faq's", element: <Faqs /> },
    { path: "/contactus", element: <ContactUs /> },


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
