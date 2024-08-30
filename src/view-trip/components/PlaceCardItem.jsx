// import { Button } from '@/components/ui/button'
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react'
// import { FaMapLocationDot } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// function PlaceCardItem({place}) {
//   const [photoUrl,setPhotoUrl]=useState();
//   useEffect(()=>{
//     place&&GetPlacePhoto();
//   },[place])
//   const GetPlacePhoto=async()=>{
//     const data={
//       textQuery:place.placeName
//     }
//     const result=await GetPlaceDetails(data).then(resp=>{
//       const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
//       setPhotoUrl(PhotoUrl);
//     })}

//   return (
//     <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
//     <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
//         <img src={photoUrl?photoUrl:'/placeholder.jpg'}
//         className='w-[130px] h-[130px] rounded-xl object-cover'
//         />
//         <div>
//             <h2 className='font-bold text-lg'>{place.placeName}</h2>
//             <p className='text-sm text-gray-400'>{place.placeDetails}</p>
//             <h2 className='mt-2'>🕙{place.timeToTravel}</h2>
//             <Button size="sm"><FaMapLocationDot /></Button>
//         </div>
//     </div>
//     </Link>
//   )
// }

// export default PlaceCardItem







// import { Button } from '@/components/ui/button';
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react';
// import { FaMapLocationDot } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

// function PlaceCardItem({ place }) {
//   const [photoUrl, setPhotoUrl] = useState();

//   useEffect(() => {
//     if (place) GetPlacePhoto();
//   }, [place]);

//   const GetPlacePhoto = async () => {
//     const data = {
//       textQuery: place.placeName,
//     };
//     const result = await GetPlaceDetails(data);
//     const photoName = result?.data?.places[0]?.photos[3]?.name;
//     if (photoName) {
//       const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
//       setPhotoUrl(photoUrl);
//     }
//   };

//   return (
//     <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'>
//       <div className="border rounded-xl p-3 mt-2 flex flex-col md:flex-row gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
//         <img
//           src={photoUrl || '/placeholder.jpg'}
//           alt={place.placeName}
//           className="w-full md:w-[130px] h-[130px] rounded-xl object-cover"
//         />
//         <div className="flex flex-col justify-between">
//           <div>
//             <h2 className="font-bold text-lg">{place.placeName}</h2>
//             <p className="text-sm text-gray-400">{place.placeDetails}</p>
//             <h2 className="mt-2">🕙 {place.timeToTravel}</h2>
//           </div>
//           <Button size="sm" className="self-end mt-2 md:mt-0">
//             <FaMapLocationDot />
//           </Button>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default PlaceCardItem;









// import { Button } from '@/components/ui/button';
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react';
// import { FaMapLocationDot } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

// function PlaceCardItem({ place }) {
//   const [photoUrl, setPhotoUrl] = useState();

//   useEffect(() => {
//     if (place) GetPlacePhoto();
//   }, [place]);

//   const GetPlacePhoto = async () => {
//     const data = {
//       textQuery: place.placeName,
//     };
//     const result = await GetPlaceDetails(data);
//     const photoName = result?.data?.places[0]?.photos[3]?.name;
//     if (photoName) {
//       const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
//       setPhotoUrl(photoUrl);
//     }
//   };

//   return (
//     <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'>
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//         <div className="flex flex-col md:flex-row">
//           <img
//             src={photoUrl || '/placeholder.jpg'}
//             alt={place.placeName}
//             className="w-full md:w-1/3 h-48 md:h-full object-cover"
//           />
//           <div className="p-6 flex flex-col justify-between flex-grow">
//             <div>
//               <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{place.placeName}</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{place.placeDetails}</p>
//               <p className="text-sm font-medium text-blue-600 dark:text-blue-400">🕙 {place.timeToTravel}</p>
//             </div>
//             <Button 
//               className="self-end mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <FaMapLocationDot className="mr-2" /> View on Map
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default PlaceCardItem;








import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (place) GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = { textQuery: place.placeName };
    const result = await GetPlaceDetails(data);
    const photoName = result?.data?.places[0]?.photos[3]?.name;
    if (photoName) {
      const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
      setPhotoUrl(photoUrl);
    }
  };

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={photoUrl || '/placeholder.jpg'}
              alt={place.placeName}
              className="h-48 w-full md:w-48 object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{place.placeName}</h3>
              <p className="text-gray-600 text-sm mb-4">{place.placeDetails}</p>
              <div className="flex items-center text-blue-600">
                <FaClock className="mr-2" />
                <span className="text-sm">{place.timeToTravel}</span>
              </div>
            </div>
            <Button 
              className="self-end mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
            >
              <FaMapMarkerAlt className="mr-2" /> View on Map
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;