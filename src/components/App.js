"use client";
import React, { Children, useEffect } from "react";
import Header from "./Header";
import CartSidebar from "./CartSidebar";
import { hideLoading } from "@/redux/slices/CartSlice";
import { useDispatch } from "react-redux";

function App({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);

  return (
    <div>
      <div className="mr-32">
        <Header />
        <div>{children}</div>
      </div>
      <CartSidebar />
    </div>
  );
}

export default App;
