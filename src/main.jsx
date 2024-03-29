import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import Search from "./components/Pages/Search";
import Details from "./components/Pages/Details";
import PageNotFound from "./components/dummy/PageNotFound";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
