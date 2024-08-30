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