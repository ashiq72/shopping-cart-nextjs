import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { loading, cartItem } = useSelector((state) => state.cart);
  console.log(loading);
  return (
    <div className="bg-black flex justify-between text-white py-3 px-4">
      <div>
        <h1 className="font-bold text-xl">Amazon Shopping Cart</h1>
      </div>
      <div>
        <Link href="/cart" className="text-lg">
          Cart
        </Link>
        <span className="text-red-700 text-lg pl-1">
          {loading ? "" : cartItem.reduce((a, c) => a + c.qty, 0)}
        </span>
      </div>
    </div>
  );
}
export default Header;
