// import React from 'react'
// import PlaceCardItem from './PlaceCardItem'

// function PlacesToVisit({trip}) {
//   return (
//     <div>
//         <h2 className='font-bold text-lg'>Places to Visit</h2>
//         <div>
//             {trip.tripData?.tripData?.itinerary.map((item,index)=>(
//                 <div className='grid grid-cols-2 gap-5'>
//                     <h2 className='font-medium text-lg'>{item.day}</h2>
//                     <div className='grid md:grid-cols-2 gap-5'>
//                     {item.plan.map((place,index)=>(
//                         <div className='my-3'>
//                             <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
//                            <PlaceCardItem place={place}/>
//                         </div>
//                     ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default PlacesToVisit




import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-5 text-center">Places to Visit</h2>
      <div>
        {trip.tripData?.tripData?.itinerary.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="font-medium text-xl mb-3">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="font-medium text-sm text-orange-600 mb-2">{place.time}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
