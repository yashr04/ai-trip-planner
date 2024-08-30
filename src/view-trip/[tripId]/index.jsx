// import { db } from "@/service/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "sonner";
// import InfoSection from "../components/InfoSection";
// import Hotels from "../components/Hotels";
// import PlacesToVisit from "../components/PlacesToVisit";
// import Footer from "../components/Footer";

// function Viewtrip() {
//   const { tripId } = useParams();
//   const[trip,setTrip]=useState([]);

//   useEffect(() => {
//     tripId && GetTripData();
//   }, [tripId]);
//   const GetTripData = async () => {
//     const docRef = doc(db, "AITrips", tripId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log("Document:", docSnap.data());
//       setTrip(docSnap.data());
//     } else {
//         console.log("No such Document");
//         toast("No trip Found!");
//       }
//   };

//   return (
//   <div className="p-10 md:px-20 lg:px-44 xl:px-56">
//     {/* Information Section */}
//     <InfoSection trip={trip}/>
//     {/* Recommended Hotels */}
//     <Hotels trip={trip}/>
//     {/* Daily Plan */}
//     <PlacesToVisit trip={trip}/>
//     {/* Footer */}
//     <Footer trip={trip}/>
//   </div>)
// }

// export default Viewtrip;















// import { db } from "@/service/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "sonner";
// import InfoSection from "../components/InfoSection";
// import Hotels from "../components/Hotels";
// import PlacesToVisit from "../components/PlacesToVisit";
// import Footer from "../components/Footer";

// function Viewtrip() {
//   const { tripId } = useParams();
//   const [trip, setTrip] = useState([]);

//   useEffect(() => {
//     tripId && GetTripData();
//   }, [tripId]);

//   const GetTripData = async () => {
//     const docRef = doc(db, "AITrips", tripId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log("Document:", docSnap.data());
//       setTrip(docSnap.data());
//     } else {
//       console.log("No such Document");
//       toast("No trip Found!");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-12 animate-fade-in-down">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
//             Your Trip Details
//           </h1>
//           <InfoSection trip={trip} />
//         </div>

//         <div >
          
//           <Hotels trip={trip} />
//         </div>

//         <div >
//           <PlacesToVisit trip={trip} />
//         </div>
//         <Footer trip={trip} />
//       </div>
//     </div>
//   );
// }

// export default Viewtrip;









import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

function Viewtrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such Document");
      toast("No trip Found!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-12 animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
            Your Trip Details
          </h1>
          <InfoSection trip={trip} />
        </div>

        <div className="mb-12">
          <Hotels trip={trip} />
        </div>

        <div className="mb-12">
          <PlacesToVisit trip={trip} />
        </div>
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Viewtrip;