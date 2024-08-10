import React from "react";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div className="px-5 py-5">
      <h2 className="font-bold text-2xl mb-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {trip?.tripData?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
