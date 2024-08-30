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