import "./styles/theme.css";
import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { Layout } from "./components/Layout/Layout";
import { mainPageLoader } from "./api/mainPageLoader";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { productListLoader } from "./api/productListLoader";
import { productLoader } from "./api/productLoader";
import { addProductToFavourties } from "./api/addProductToFavouritesAction";

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavourties,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/koszyk", element: <Cart /> },
      { path: "/ulubione", element: <Favourites /> },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
