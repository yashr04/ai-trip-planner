// import { Button } from '@/components/ui/button'
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react'
// import { IoIosSend } from "react-icons/io";

// export default function InfoSection({ trip }) {
//   const [photoUrl, setPhotoUrl] = useState();

//   useEffect(() => {
//     if (trip) GetPlacePhoto();
//   }, [trip]);

//   const GetPlacePhoto = async () => {
//     const data = {
//       textQuery: trip?.userSelection?.location?.label
//     };
//     const result = await GetPlaceDetails(data);
//     const photoName = result?.data?.places[0]?.photos[3]?.name;
//     if (photoName) {
//       const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
//       setPhotoUrl(photoUrl);
//     }
//   };

//   return (
//     <div className="px-5 py-5">
//       <img
//         src={photoUrl || '/placeholder.jpg'}
//         alt={trip?.userSelection?.location?.label}
//         className="h-[340px] w-full object-cover rounded"
//       />
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5">
//         <div className="flex flex-col gap-2 mb-5 md:mb-0">
//           <h2 className="font-bold text-2xl">{trip?.userSelection?.location?.label}</h2>
//           <div className="flex flex-wrap gap-3">
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
//               📅 {trip.userSelection?.noOfDays} Day
//             </h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
//               💸 {trip.userSelection?.budget} Budget
//             </h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
//               🥂 No. of Travellers: {trip.userSelection?.traveler}
//             </h2>
//           </div>
//         </div>
//         <Button className="flex-shrink-0">
//           <IoIosSend className="text-lg" />
//         </Button>
//       </div>
//     </div>
//   );
// }












import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";

export default function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (trip) GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label
    };
    const result = await GetPlaceDetails(data);
    const photoName = result?.data?.places[0]?.photos[3]?.name;
    if (photoName) {
      const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
      setPhotoUrl(photoUrl);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-12 animate-fade-in-down">
      <img
        src={photoUrl || '/placeholder.jpg'}
        alt={trip?.userSelection?.location?.label}
        className="h-[340px] w-full object-cover rounded-lg mb-8"
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col gap-4 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-800 dark:text-blue-100 text-sm font-medium">
              📅 {trip.userSelection?.noOfDays} Day
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-800 rounded-full text-green-800 dark:text-green-100 text-sm font-medium">
              💸 {trip.userSelection?.budget} Budget
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-800 rounded-full text-purple-800 dark:text-purple-100 text-sm font-medium">
              🥂 {trip.userSelection?.traveler} Travellers
            </span>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <IoIosSend className="text-lg mr-2" />
          Share Trip
        </Button>
      </div>
    </div>
  );
}