// import React from "react";
// import HotelCardItem from "./HotelCardItem";

// function Hotels({ trip }) {
//   return (
//     <div className="px-5 py-5">
//       <h2 className="font-bold text-2xl mb-5">Hotel Recommendations</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//         {trip?.tripData?.tripData?.hotels?.map((hotel, index) => (
//           <HotelCardItem key={index} hotel={hotel} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;











// import React from "react";
// import HotelCardItem from "./HotelCardItem";

// function Hotels({ trip }) {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-12 animate-fade-in-up">
//       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//         Hotel Recommendations
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {trip?.tripData?.tripData?.hotels?.map((hotel, index) => (
//           <HotelCardItem key={index} hotel={hotel} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;










import React from "react";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl p-8 mb-12 animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Hotels Recommendation
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {trip?.tripData?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;