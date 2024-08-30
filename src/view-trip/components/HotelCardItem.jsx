import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';

function HotelCardItem({hotel}) {
  const [PhotoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel])

  const GetPlacePhoto = async () => {
    const data = { textQuery: hotel?.hotelName }
    const result = await GetPlaceDetails(data).then(resp => {
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel.hotelName+","+ hotel?.hotelAddress} target='_blank'>
      <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
        <div className="relative">
          <img src={PhotoUrl || '/placeholder.jpg'} className='h-48 w-full object-cover' alt={hotel?.hotelName} />
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-full text-sm font-bold">
            {hotel?.rating} <FaStar className="inline ml-1" />
          </div>
        </div>
        <div className='p-4 space-y-2'>
          <h3 className='font-bold text-lg text-gray-800 truncate'>{hotel?.hotelName}</h3>
          <p className='text-sm text-gray-600 flex items-center'>
            <FaMapMarkerAlt className="mr-1 text-blue-600" /> {hotel?.hotelAddress}
          </p>
          <p className='text-sm font-medium text-green-600 flex items-center'>
            {hotel?.price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default HotelCardItem