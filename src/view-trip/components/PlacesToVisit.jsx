// import React from 'react';
// import PlaceCardItem from './PlaceCardItem';

// function PlacesToVisit({ trip }) {
//   return (
//     <div className="p-5">
//       <h2 className="font-bold text-2xl mb-5 text-center">Places to Visit</h2>
//       <div>
//         {trip.tripData?.tripData?.itinerary.map((item, index) => (
//           <div key={index} className="mb-8">
//             <h2 className="font-medium text-xl mb-3">{item.day}</h2>
//             <div className="grid md:grid-cols-2 gap-5">
//               {item.plan.map((place, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//                   <h2 className="font-medium text-sm text-orange-600 mb-2">{place.time}</h2>
//                   <PlaceCardItem place={place} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;








// import React from 'react';
// import PlaceCardItem from './PlaceCardItem';

// function PlacesToVisit({ trip }) {
//   return (
//     <div className="p-5">
//       <h2 className="font-bold text-2xl mb-5 text-center text-black dark:text-white">Places to Visit</h2>
//       <div>
//         {trip.tripData?.tripData?.itinerary.map((item, index) => (
//           <div key={index} className="mb-8">
//             <h2 className="font-medium text-xl mb-3 text-black dark:text-white">{item.day}</h2>
//             <div className="grid md:grid-cols-2 gap-5">
//               {item.plan.map((place, index) => (
//                 <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
//                   <h2 className="font-medium text-sm text-orange-600 dark:text-orange-400 mb-2">{place.time}</h2>
//                   <PlaceCardItem place={place} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;











// import React from 'react';
// import PlaceCardItem from './PlaceCardItem';

// function PlacesToVisit({ trip }) {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-12 animate-fade-in-up">
//       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//         Places to Visit
//       </h2>
//       <div className="space-y-12">
//         {trip.tripData?.tripData?.itinerary.map((item, index) => (
//           <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
//               {item.day}
//             </h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               {item.plan.map((place, index) => (
//                 <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
//                   <div className="p-4">
//                     <h4 className="font-medium text-sm text-orange-600 dark:text-orange-400 mb-2">
//                       {place.time}
//                     </h4>
//                     <PlaceCardItem place={place} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;







import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl p-8 mb-12 animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        Your Adventure Awaits
      </h2>
      <div className="space-y-12">
        {trip.tripData?.tripData?.itinerary.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
              {item.day}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {item.plan.map((place, index) => (
                <PlaceCardItem key={index} place={place} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;