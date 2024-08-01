// import { GoogleGenerativeAI } from "@google/generative-ai";

  
//   const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
//   };
  

//     export const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//         {
//           role: "user",
//           parts: [
//             {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with Hotel name, Hotel address, Price in Rupees, hotel image URL, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             {text: "## Las Vegas Budget Trip for a Couple (3 Days)\n\n**Hotel Options:**\n\n```json\n[\n  {\n    \"hotelName\": \"The D Las Vegas\",\n    \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n    \"price\": \"$50-$100/night\",\n    \"hotelImageURL\": \"https://www.thed.com/media/wysiwyg/the-d-hotel-casino-las-vegas-exterior.jpg\",\n    \"geoCoordinates\": \"36.1699, -115.1424\",\n    \"rating\": \"3.5 stars\",\n    \"description\": \"Centrally located on Fremont Street, this hotel offers affordable rooms, a casino, and a rooftop pool. It's close to the Fremont Street Experience and other downtown attractions.\"\n  },\n  {\n    \"hotelName\": \"Golden Nugget Las Vegas\",\n    \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n    \"price\": \"$70-$150/night\",\n    \"hotelImageURL\": \"https://www.goldennugget.com/las-vegas/images/hotel-hero-desktop.jpg\",\n    \"geoCoordinates\": \"36.1697, -115.1416\",\n    \"rating\": \"4 stars\",\n    \"description\": \"A classic Las Vegas hotel with a luxurious pool and casino. It's known for its shark tank and offers a variety of dining and entertainment options.\"\n  },\n  {\n    \"hotelName\": \"Circus Circus Hotel & Casino\",\n    \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n    \"price\": \"$40-$80/night\",\n    \"hotelImageURL\": \"https://www.circuscircus.com/media/wysiwyg/home-hero-cc-strip-desktop.jpg\",\n    \"geoCoordinates\": \"36.1120, -115.1723\",\n    \"rating\": \"3 stars\",\n    \"description\": \"A budget-friendly hotel known for its circus-themed attractions, a large casino, and a variety of dining options.\"\n  },\n  {\n    \"hotelName\": \"Main Street Station Casino, Brewery & Hotel\",\n    \"hotelAddress\": \"200 N 3rd St, Las Vegas, NV 89101\",\n    \"price\": \"$45-$90/night\",\n    \"hotelImageURL\": \"https://www.mainstreetstationcasino.com/media/wysiwyg/hotel-hero-desktop.jpg\",\n    \"geoCoordinates\": \"36.1715, -115.1403\",\n    \"rating\": \"3.5 stars\",\n    \"description\": \"A charming hotel with a vintage train station theme. It offers a casino, brewery, and a variety of dining options.\"\n  }\n]\n```\n\n**Itinerary:**\n\n```json\n[\n  {\n    \"day\": \"Day 1\",\n    \"plan\": [\n      {\n        \"time\": \"9:00 AM\",\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Walk under the canopy of lights, enjoy free live music and street performers, and experience the vibrant atmosphere of downtown Las Vegas.\",\n        \"placeImageURL\": \"https://www.fremontstreetexperience.com/media/wysiwyg/home-hero-desktop.jpg\",\n        \"geoCoordinates\": \"36.1694, -115.1431\",\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2 hours\"\n      },\n      {\n        \"time\": \"11:00 AM\",\n        \"placeName\": \"Pinball Hall of Fame\",\n        \"placeDetails\": \"Play classic and modern pinball machines from the 1950s to present day.\",\n        \"placeImageURL\": \"https://pinballhalloffame.org/images/pinball-hall-of-fame-exterior.jpg\",\n        \"geoCoordinates\": \"36.1711, -115.1437\",\n        \"ticketPricing\": \"$15/person\",\n        \"timeToTravel\": \"1 hour\"\n      },\n      {\n        \"time\": \"1:00 PM\",\n        \"placeName\": \"The D Las Vegas Casino\",\n        \"placeDetails\": \"Try your luck at the casino and enjoy the free drinks and live entertainment.\",\n        \"placeImageURL\": \"https://www.thed.com/media/wysiwyg/the-d-hotel-casino-las-vegas-casino-floor.jpg\",\n        \"geoCoordinates\": \"36.1699, -115.1424\",\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2 hours\"\n      },\n      {\n        \"time\": \"3:00 PM\",\n        \"placeName\": \"Downtown Container Park\",\n        \"placeDetails\": \"Explore unique shops, art galleries, and restaurants housed in repurposed shipping containers.\",\n        \"placeImageURL\": \"https://www.downtowncontainerpark.com/media/wysiwyg/home-hero-desktop.jpg\",\n        \"geoCoordinates\": \"36.1683, -115.1441\",\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"1 hour\"\n      },\n      {\n        \"time\": \"5:00 PM\",\n        \"placeName\": \"Buffet Dinner\",\n        \"placeDetails\": \"Enjoy a budget-friendly buffet dinner at one of the many casinos in downtown Las Vegas.\",\n        \"placeImageURL\": \"https://www.casino.com/images/casino-buffet-food.jpg\",\n        \"geoCoordinates\": \"N/A\",\n        \"ticketPricing\": \"$15-$30/person\",\n        \"timeToTravel\": \"2 hours\"\n      }\n    ]\n  },\n  {\n    \"day\": \"Day 2\",\n    \"plan\": [\n      {\n        \"time\": \"9:00 AM\",\n        \"placeName\": \"Red Rock Canyon National Conservation Area\",\n        \"placeDetails\": \"Drive through stunning red rock formations and enjoy hiking trails with breathtaking views.\",\n        \"placeImageURL\": \"https://www.nps.gov/redr/learn/nature/images/Red-Rock-Canyon-National-Conservation-Area-Nevada-Sunset-View.jpg\",\n        \"geoCoordinates\": \"36.1288, -115.2796\",\n        \"ticketPricing\": \"$15/vehicle\",\n        \"timeToTravel\": \"3 hours\"\n      },\n      {\n        \"time\": \"1:00 PM\",\n        \"placeName\": \"The Neon Museum\",\n        \"placeDetails\": \"Explore a collection of iconic neon signs from Las Vegas history.\",\n        \"placeImageURL\": \"https://www.neonmuseum.org/media/wysiwyg/neon-museum-night-view.jpg\",\n        \"geoCoordinates\": \"36.1717, -115.1359\",\n        \"ticketPricing\": \"$20/person\",\n        \"timeToTravel\": \"1.5 hours\"\n      },\n      {\n        \"time\": \"3:00 PM\",\n        \"placeName\": \"Las Vegas Strip\",\n        \"placeDetails\": \"Walk along the famous Strip, marvel at the extravagant hotels, and enjoy the vibrant atmosphere.\",\n        \"placeImageURL\": \"https://www.visitlasvegas.com/media/wysiwyg/las-vegas-strip-at-night.jpg\",\n        \"geoCoordinates\": \"36.1146, -115.1728\",\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2 hours\"\n      },\n      {\n        \"time\": \"5:00 PM\",\n        \"placeName\": \"Free Show on the Strip\",\n        \"placeDetails\": \"Enjoy a free show on the Strip, such as the Bellagio Fountains or the Volcano at the Mirage.\",\n        \"placeImageURL\": \"https://www.bellagio.com/media/wysiwyg/bellagio-fountains.jpg\",\n        \"geoCoordinates\": \"N/A\",\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"1 hour\"\n      },\n      {\n        \"time\": \"6:00 PM\",\n        \"placeName\": \"Dinner at a Casual Restaurant on the Strip\",\n        \"placeDetails\": \"Enjoy a casual dinner at one of the many restaurants on the Strip.\",\n        \"placeImageURL\": \"N/A\",\n        \"geoCoordinates\": \"N/A\",\n        \"ticketPricing\": \"$10-$20/person\",\n        \"timeToTravel\": \"2 hours\"\n      }\n    ]\n  },\n  {\n    \"day\": \"Day 3\",\n    \"plan\": [\n      {\n        \"time\": \"9:00 AM\",\n        \"placeName\": \"Hoover Dam\",\n        \"placeDetails\": \"Take a day trip to see the impressive Hoover Dam and learn about its history and construction.\",\n        \"placeImageURL\": \"https://www.usbr.gov/lc/hooverdam/images/hooverdam_aerial.jpg\",\n        \"geoCoordinates\": \"36.0037, -114.9920\",\n        \"ticketPricing\": \"$30/person\",\n        \"timeToTravel\": \"4 hours\"\n      },\n      {\n        \"time\": \"1:00 PM\",\n        \"placeName\": \"Lake Mead\",\n        \"placeDetails\": \"Enjoy a picnic lunch or go for a swim at Lake Mead.\",\n        \"placeImageURL\": \"https://www.nps.gov/lake/learn/nature/images/Lake-Mead-view-from-Hoover-Dam.jpg\",\n        \"geoCoordinates\": \"36.0934, -114.8879\",\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2 hours\"\n      },\n      {\n        \"time\": \"3:00 PM\",\n        \"placeName\": \"Valley of Fire State Park\",\n        \"placeDetails\": \"Explore the scenic Valley of Fire State Park, known for its red rock formations and ancient petroglyphs.\",\n        \"placeImageURL\": \"https://www.parks.nv.gov/images/parks/Valley-of-Fire/valley-of-fire-state-park.jpg\",\n        \"geoCoordinates\": \"36.3592, -114.6541\",\n        \"ticketPricing\": \"$10/vehicle\",\n        \"timeToTravel\": \"3 hours\"\n      },\n      {\n        \"time\": \"6:00 PM\",\n        \"placeName\": \"Dinner at a Local Restaurant\",\n        \"placeDetails\": \"Enjoy a delicious and affordable dinner at a local restaurant in Las Vegas.\",\n        \"placeImageURL\": \"N/A\",\n        \"geoCoordinates\": \"N/A\",\n        \"ticketPricing\": \"$10-$20/person\",\n        \"timeToTravel\": \"2 hours\"\n      }\n    ]\n  }\n]\n```\n\n**Notes:**\n\n* This itinerary is a suggestion and can be customized based on your interests and preferences.\n* Consider using public transportation or ride-sharing services to save on transportation costs.\n* Look for deals and discounts on attractions and activities to maximize your budget.\n* Take advantage of free attractions and activities, such as the Bellagio Fountains or the Volcano at the Mirage.\n* Pack snacks and drinks to avoid spending money on overpriced items at tourist spots.\n* Dress comfortably and in layers, as temperatures in Las Vegas can vary greatly.\n* Drink plenty of water to stay hydrated, especially if you are spending time outdoors.\n* Be aware of your surroundings and take precautions to protect your belongings from theft.\n\nThis plan offers a mix of classic Las Vegas experiences, outdoor adventures, and budget-friendly options. Remember, flexibility is key, and you can adjust the itinerary to fit your specific needs and interests."},
//           ],
//         },
//       ],
//     });
  










import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with Hotel name, Hotel address, Price in Rupees, hotel image URL, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format."
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
            "tripData": {
              "hotels": [
                {
                  "hotelName": "The D Las Vegas",
                  "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",
                  "price": "$50-$100/night",
                  "hotelImageURL": "https://www.thed.com/media/wysiwyg/the-d-hotel-casino-las-vegas-exterior.jpg",
                  "geoCoordinates": "36.1699, -115.1424",
                  "rating": "3.5 stars",
                  "description": "Centrally located on Fremont Street, this hotel offers affordable rooms, a casino, and a rooftop pool. It's close to the Fremont Street Experience and other downtown attractions."
                },
                {
                  "hotelName": "Golden Nugget Las Vegas",
                  "hotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",
                  "price": "$70-$150/night",
                  "hotelImageURL": "https://www.goldennugget.com/las-vegas/images/hotel-hero-desktop.jpg",
                  "geoCoordinates": "36.1697, -115.1416",
                  "rating": "4 stars",
                  "description": "A classic Las Vegas hotel with a luxurious pool and casino. It's known for its shark tank and offers a variety of dining and entertainment options."
                },
                {
                  "hotelName": "Circus Circus Hotel & Casino",
                  "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",
                  "price": "$40-$80/night",
                  "hotelImageURL": "https://www.circuscircus.com/media/wysiwyg/home-hero-cc-strip-desktop.jpg",
                  "geoCoordinates": "36.1120, -115.1723",
                  "rating": "3 stars",
                  "description": "A budget-friendly hotel known for its circus-themed attractions, a large casino, and a variety of dining options."
                },
                {
                  "hotelName": "Main Street Station Casino, Brewery & Hotel",
                  "hotelAddress": "200 N 3rd St, Las Vegas, NV 89101",
                  "price": "$45-$90/night",
                  "hotelImageURL": "https://www.mainstreetstationcasino.com/media/wysiwyg/hotel-hero-desktop.jpg",
                  "geoCoordinates": "36.1715, -115.1403",
                  "rating": "3.5 stars",
                  "description": "A charming hotel with a vintage train station theme. It offers a casino, brewery, and a variety of dining options."
                }
              ],
              "itinerary": [
                {
                  "day": "Day 1",
                  "plan": [
                    {
                      "time": "9:00 AM",
                      "placeName": "Fremont Street Experience",
                      "placeDetails": "Walk under the canopy of lights, enjoy free live music and street performers, and experience the vibrant atmosphere of downtown Las Vegas.",
                      "placeImageURL": "https://www.fremontstreetexperience.com/media/wysiwyg/home-hero-desktop.jpg",
                      "geoCoordinates": "36.1694, -115.1431",
                      "ticketPricing": "Free",
                      "timeToTravel": "2 hours"
                    },
                    {
                      "time": "11:00 AM",
                      "placeName": "Pinball Hall of Fame",
                      "placeDetails": "Play classic and modern pinball machines from the 1950s to present day.",
                      "placeImageURL": "https://pinballhalloffame.org/images/pinball-hall-of-fame-exterior.jpg",
                      "geoCoordinates": "36.1711, -115.1437",
                      "ticketPricing": "$15/person",
                      "timeToTravel": "1 hour"
                    },
                    {
                      "time": "1:00 PM",
                      "placeName": "The D Las Vegas Casino",
                      "placeDetails": "Try your luck at the casino and enjoy the free drinks and live entertainment.",
                      "placeImageURL": "https://www.thed.com/media/wysiwyg/the-d-hotel-casino-las-vegas-casino-floor.jpg",
                      "geoCoordinates": "36.1699, -115.1424",
                      "ticketPricing": "Free",
                      "timeToTravel": "2 hours"
                    },
                    {
                      "time": "3:00 PM",
                      "placeName": "Downtown Container Park",
                      "placeDetails": "Explore unique shops, art galleries, and restaurants housed in repurposed shipping containers.",
                      "placeImageURL": "https://www.downtowncontainerpark.com/media/wysiwyg/home-hero-desktop.jpg",
                      "geoCoordinates": "36.1683, -115.1441",
                      "ticketPricing": "Free",
                      "timeToTravel": "1 hour"
                    },
                    {
                      "time": "5:00 PM",
                      "placeName": "Buffet Dinner",
                      "placeDetails": "Enjoy a budget-friendly buffet dinner at one of the many casinos in downtown Las Vegas.",
                      "placeImageURL": "https://www.casino.com/images/casino-buffet-food.jpg",
                      "geoCoordinates": "N/A",
                      "ticketPricing": "$15-$30/person",
                      "timeToTravel": "2 hours"
                    }
                  ]
                },
                {
                  "day": "Day 2",
                  "plan": [
                    {
                      "time": "9:00 AM",
                      "placeName": "Red Rock Canyon National Conservation Area",
                      "placeDetails": "Drive through stunning red rock formations and enjoy hiking trails with breathtaking views.",
                      "placeImageURL": "https://www.nps.gov/redr/learn/nature/images/Red-Rock-Canyon-National-Conservation-Area-Nevada-Sunset-View.jpg",
                      "geoCoordinates": "36.1288, -115.2796",
                      "ticketPricing": "$15/vehicle",
                      "timeToTravel": "3 hours"
                    },
                    {
                      "time": "1:00 PM",
                      "placeName": "The Neon Museum",
                      "placeDetails": "Explore a collection of iconic neon signs from Las Vegas history.",
                      "placeImageURL": "https://www.neonmuseum.org/media/wysiwyg/neon-museum-night-view.jpg",
                      "geoCoordinates": "36.1717, -115.1359",
                      "ticketPricing": "$20/person",
                      "timeToTravel": "1.5 hours"
                    },
                    {
                      "time": "3:00 PM",
                      "placeName": "Las Vegas Strip",
                      "placeDetails": "Walk along the famous Strip, marvel at the extravagant hotels, and enjoy the vibrant atmosphere.",
                      "placeImageURL": "https://www.visitlasvegas.com/media/wysiwyg/las-vegas-strip-at-night.jpg",
                      "geoCoordinates": "36.1146, -115.1728",
                      "ticketPricing": "Free",
                      "timeToTravel": "2 hours"
                    },
                    {
                      "time": "5:00 PM",
                      "placeName": "Free Show on the Strip",
                      "placeDetails": "Enjoy a free show on the Strip, such as the Bellagio Fountains or the Volcano at the Mirage.",
                      "placeImageURL": "https://www.bellagio.com/media/wysiwyg/bellagio-fountains.jpg",
                      "geoCoordinates": "N/A",
                      "ticketPricing": "Free",
                      "timeToTravel": "1 hour"
                    },
                    {
                      "time": "6:00 PM",
                      "placeName": "Dinner at a Casual Restaurant on the Strip",
                      "placeDetails": "Enjoy a casual dinner at one of the many restaurants on the Strip.",
                      "placeImageURL": "N/A",
                      "geoCoordinates": "N/A",
                      "ticketPricing": "$10-$20/person",
                      "timeToTravel": "2 hours"
                    }
                  ]
                },
                {
                  "day": "Day 3",
                  "plan": [
                    {
                      "time": "9:00 AM",
                      "placeName": "Hoover Dam",
                      "placeDetails": "Take a day trip to see the impressive Hoover Dam and learn about its history and construction.",
                      "placeImageURL": "https://www.usbr.gov/lc/hooverdam/images/hooverdam_aerial.jpg",
                      "geoCoordinates": "36.0037, -114.9920",
                      "ticketPricing": "$30/person",
                      "timeToTravel": "4 hours"
                    },
                    {
                      "time": "1:00 PM",
                      "placeName": "Lake Mead",
                      "placeDetails": "Enjoy a picnic lunch or go for a swim at Lake Mead.",
                      "placeImageURL": "https://www.nps.gov/lake/learn/nature/images/Lake-Mead-view-from-Hoover-Dam.jpg",
                      "geoCoordinates": "36.0934, -114.8879",
                      "ticketPricing": "Free",
                      "timeToTravel": "2 hours"
                    },
                    {
                      "time": "3:00 PM",
                      "placeName": "Valley of Fire State Park",
                      "placeDetails": "Explore the scenic Valley of Fire State Park, known for its red rock formations and ancient petroglyphs.",
                      "placeImageURL": "https://www.parks.nv.gov/images/parks/Valley-of-Fire/valley-of-fire-state-park.jpg",
                      "geoCoordinates": "36.3592, -114.6541",
                      "ticketPricing": "$10/vehicle",
                      "timeToTravel": "3 hours"
                    },
                    {
                      "time": "6:00 PM",
                      "placeName": "Dinner at a Local Restaurant",
                      "placeDetails": "Enjoy a delicious and affordable dinner at a local restaurant in Las Vegas.",
                      "placeImageURL": "N/A",
                      "geoCoordinates": "N/A",
                      "ticketPricing": "$10-$20/person",
                      "timeToTravel": "2 hours"
                    }
                  ]
                }
              ]
            }
          }`
        },
      ],
    },
  ],
});
