"use client";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

function ProductRate({ rate, count }) {
  return (
    <div className="flex">
      {/* <Rating style={{ maxWidth: 100 }} value={rate} readOnly /> {count} reviews */}
      <Rating style={{ maxWidth: 100 }} value={rate} readOnly />
      {count} reviews
    </div>
  );
}

export default ProductRate;
