// import { Button } from '@/components/ui/button'
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react'
// import { IoIosSend } from "react-icons/io";


// export default function InfoSection({trip}) {
//   const [photoUrl,setPhotoUrl]=useState();
//   useEffect(()=>{
//     trip&&GetPlacePhoto();
//   },[trip])
//   const GetPlacePhoto=async()=>{
//     const data={
//       textQuery:trip?.userSelection?.location?.label
//     }
//     const result=await GetPlaceDetails(data).then(resp=>{
//       console.log(resp.data.places[0].photos[3].name)

//       const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
//       setPhotoUrl(PhotoUrl);
//     })}
//   return (
//     <div>
//         <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='h-[340px] w-full object-cover rounded'/>
//         <div className='flex justify-between items-center'>
//         <div className='my-5 flex flex-col gap-2'>
//             <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
//             <div className='flex gap-5'>
//               <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅{trip.userSelection?.noOfDays} Day</h2>
//               <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💸{trip.userSelection?.budget} Budget</h2>
//               <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂 No. of Traveller: {trip.userSelection?.traveler} </h2>
//             </div>
//         </div>
//         <Button><IoIosSend /></Button>
//         </div>
//     </div>
//   )
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
    <div className="px-5 py-5">
      <img
        src={photoUrl || '/placeholder.jpg'}
        alt={trip?.userSelection?.location?.label}
        className="h-[340px] w-full object-cover rounded"
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5">
        <div className="flex flex-col gap-2 mb-5 md:mb-0">
          <h2 className="font-bold text-2xl">{trip?.userSelection?.location?.label}</h2>
          <div className="flex flex-wrap gap-3">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅 {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              💸 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🥂 No. of Travellers: {trip.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button className="flex-shrink-0">
          <IoIosSend className="text-lg" />
        </Button>
      </div>
    </div>
  );
}
