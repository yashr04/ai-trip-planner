import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        if (trip) {
            GetPlacePhoto();
        }
    }, [trip]);

    const GetPlacePhoto = async () => {
        if (!trip?.userSelection?.location?.label) return;

        const data = {
            textQuery: trip.userSelection.location.label
        };

        try {
            const response = await GetPlaceDetails(data);

            if (response && response.data && response.data.places && response.data.places.length > 0) {
                const place = response.data.places[0];
                if (place.photos && place.photos.length > 3) {
                    const photoName = place.photos[3].name;
                    const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
                    setPhotoUrl(photoUrl);
                }
            }
        } catch (error) {
            console.error('Error fetching place details:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Link to={'/view-trip/' + trip?.id} className="block">
            <div className="hover:scale-105 transition-all cursor-pointer border rounded-xl overflow-hidden shadow-lg">
                <img src={photoUrl ? photoUrl : '/placeholder.jpg'} alt={trip?.userSelection?.location?.label} className="object-cover h-[220px] w-full" />
                <div className="p-4">
                    <h2 className="font-bold text-lg">{trip?.userSelection?.location?.label}</h2>
                    <p className="text-sm text-gray-500">{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection?.budget} budget</p>
                </div>
            </div>
        </Link>
    );
}

export default UserTripCardItem;

