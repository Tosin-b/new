import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import MyGigs from "./pages/myGigs/MyGigs";
import Messages from "./pages/messages/messages";
import Message from "./pages/message/message";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
