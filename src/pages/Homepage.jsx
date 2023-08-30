import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../components/home/Home";
import NotFound from "../components/Error/NotFound";
import classes from "./Homepage.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./SearchPage";
const HomePage = () => {
  const [sidebar, handleSidebarState] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header handleSidebarState={handleSidebarState} />
          <div className={classes.main_container}>
            <Sidebar sidebar={sidebar} />
            <Home />
          </div>
        </>
      ),
    },
    { path: "/search", element: (
      <>
        <Header handleSidebarState={handleSidebarState} />
        <div className={classes.main_container}>
          <Sidebar sidebar={sidebar} />
          <SearchPage />
        </div>
      </>
    ), },
    { path: "/notfound", element: (
      <>
        <Header handleSidebarState={handleSidebarState} />
        <div className={classes.main_container}>
          <Sidebar sidebar={sidebar} />
          <NotFound/>
        </div>
      </>
    ), }
  ]);
  return <RouterProvider router={router} />;
};

export default HomePage;
