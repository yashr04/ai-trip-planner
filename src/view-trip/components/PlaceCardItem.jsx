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







import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (place) GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };
    const result = await GetPlaceDetails(data);
    const photoName = result?.data?.places[0]?.photos[3]?.name;
    if (photoName) {
      const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
      setPhotoUrl(photoUrl);
    }
  };

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'>
      <div className="border rounded-xl p-3 mt-2 flex flex-col md:flex-row gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || '/placeholder.jpg'}
          alt={place.placeName}
          className="w-full md:w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-lg">{place.placeName}</h2>
            <p className="text-sm text-gray-400">{place.placeDetails}</p>
            <h2 className="mt-2">🕙 {place.timeToTravel}</h2>
          </div>
          <Button size="sm" className="self-end mt-2 md:mt-0">
            <FaMapLocationDot />
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
