"use client";

import CartSidebar from "./CardSidebar";
import Header from "./Header";

export default function App({ children }) {
  return (
    <div>
      <div className="mr-32">
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <CartSidebar />
    </div>
  );
}
