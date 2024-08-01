// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React, { useEffect, useState } from "react";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
// import { toast } from "sonner";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { chatSession } from "@/service/AIModel";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog";
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "@/service/firebaseConfig";
// import { useNavigate } from "react-router-dom";

// function CreateTrip() {
//   const [place, setPlace] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [openDialog, setOpenDialog] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleInputChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     console.log(`Updated ${name}:`, value);
//   };

//   useEffect(() => {
//     console.log('FormData:', formData);
//   }, [formData]);

//   const GetUserProfile = (tokenInfo) => {
//     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//       headers: {
//         Authorization: `Bearer ${tokenInfo?.access_token}`,
//         Accept: 'application/json'
//       }
//     }).then((resp) => {
//       console.log(resp);
//       localStorage.setItem('user', JSON.stringify(resp.data));
//       setOpenDialog(false);
//       onGenerateTrip(); // Generate trip after successful sign-in
//     }).catch((error) => {
//       console.error("Error fetching user profile:", error);
//     });
//   };

//   const login = useGoogleLogin({
//     onSuccess: (tokenInfo) => {
//       console.log(tokenInfo);
//       GetUserProfile(tokenInfo);
//     },
//     onError: (error) => console.log(error)
//   });

//   const onGenerateTrip = async () => {
//     const user = localStorage.getItem('user');

//     if (!user) {
//       setOpenDialog(true); // Show sign-in dialog if user is not signed in
//       return;
//     }

//     if (formData?.noOfDays > 5 && (!formData?.location || !formData?.budget || !formData?.traveler)) {
//       toast("Please fill all details.");
//       return;
//     }

//     setLoading(true);
//     const FINAL_PROMPT = AI_PROMPT
//       .replace('{location}', formData?.location?.label)
//       .replace('{totalDays}', formData?.noOfDays)
//       .replace('{traveler}', formData?.traveler)
//       .replace('{budget}', formData?.budget)
//       .replace('{totalDays}', formData?.noOfDays);

//     const result = await chatSession.sendMessage(FINAL_PROMPT);
//     const tripData = result?.response?.text();
//     console.log('TripData:', tripData);

//     setLoading(false);
//     SaveAiTrip(tripData);
//   };

//   const SaveAiTrip = async (TripData) => {
//     setLoading(true);
//     const user = JSON.parse(localStorage.getItem('user'));
//     const docId = Date.now().toString();
//     const tripObject = {
//       userSelection: formData,
//       tripData: JSON.parse(TripData),
//       userEmail: user?.email,
//       id: docId,
//     };
//     console.log('Saving TripData:', tripObject);

//     await setDoc(doc(db, "AITrips", docId), tripObject);
//     setLoading(false);
//     navigate('/view-trip/' + docId);
//   };

//   return (
//     <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
//       <h2 className="font-bold text-3xl">Tell us your Travel Preferences</h2>
//       <p className="mt-3 text-gray-500 text-xl">
//         Just provide some basic information, and our trip planner will generate
//         a customised itinerary based on your preferences.
//       </p>
//       <div className="mt-20 flex flex-col gap-10">
//         <div>
//           <h2 className="text-xl my-3 font-medium">
//             What is your destination of choice?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChange("location", v);
//               },
//             }}
//           />
//         </div>
//         <div>
//           <h2 className="text-xl my-3 font-medium">
//             How many days are you planning your trip?
//           </h2>
//           <Input
//             placeholder={"Ex. 3"}
//             type="number"
//             onChange={(e) => handleInputChange("noOfDays", e.target.value)}
//           />
//         </div>
//       </div>
//       <div>
//         <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
//         <div className="grid grid-cols-3 gap-5 mt-5">
//           {SelectBudgetOptions.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => handleInputChange("budget", item.title)}
//               className={`p-4 border cursor-pointer 
//               rounded-lg hover:shadow-lg
//               ${formData?.budget === item.title && "shadow-lg border-black"}
//               `}
//             >
//               <h2 className="text-4xl">{item.icon}</h2>
//               <h2 className="font-bold text-lg">{item.title}</h2>
//               <h2 className="text-sm text-gray-500">{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl my-3 font-medium">
//           Who do you plan on travelling with on your next adventure?
//         </h2>
//         <div className="grid grid-cols-3 gap-5 mt-5">
//           {SelectTravelesList.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => handleInputChange("traveler", item.people)}
//               className={`p-4 border cursor-pointer rounded-lg 
//               hover:shadow-lg
//               ${formData?.traveler === item.people && 'shadow-lg border-black'}
//               `}
//             >
//               <h2 className="text-4xl">{item.icon}</h2>
//               <h2 className="font-bold text-lg">{item.title}</h2>
//               <h2 className="text-sm text-gray-500">{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="my-10 justify-end flex">
//         <Button 
//           disabled={loading}
//           onClick={onGenerateTrip}
//         >
//           {loading ? 
//             <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" /> 
//             : 'Generate Trip'}
//         </Button>
//       </div>

//       <Dialog open={openDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.svg" alt="Logo" />
//               <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
//               <p>Sign In to the app with Google authentication securely</p>
//               <Button
//                 onClick={login}
//                 className="w-full mt-5 flex gap-4 items-center"
//               >
//                 <FcGoogle className="h-7 w-7" />Sign In with Google
//               </Button> 
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default CreateTrip;








import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { chatSession } from "@/service/AIModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(`Updated ${name}:`, value);
  };

  useEffect(() => {
    console.log('FormData:', formData);
  }, [formData]);

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      onGenerateTrip(); // Generate trip after successful sign-in
    }).catch((error) => {
      console.error("Error fetching user profile:", error);
    });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => {
      console.log(tokenInfo);
      GetUserProfile(tokenInfo);
    },
    onError: (error) => console.log(error)
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDialog(true); // Show sign-in dialog if user is not signed in
      return;
    }

    if (formData?.noOfDays > 5 && (!formData?.location || !formData?.budget || !formData?.traveler)) {
      toast("Please fill all details.");
      return;
    }

    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    const tripData = result?.response?.text();
    console.log('TripData:', tripData);

    setLoading(false);
    SaveAiTrip(tripData);
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();
    const tripObject = {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    };
    console.log('Saving TripData:', tripObject);

    await setDoc(doc(db, "AITrips", docId), tripObject);
    setLoading(false);
    navigate('/view-trip/' + docId);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl text-gray-900">Tell us your Travel Preferences</h2>
      <p className="mt-3 text-gray-600 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium text-gray-900">
            What is your destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium text-gray-900">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex. 3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium text-gray-900">What is your budget?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-shadow
              ${formData?.budget === item.title && "shadow-lg border-black"}
              `}
            >
              <h2 className="text-4xl text-gray-900">{item.icon}</h2>
              <h2 className="font-bold text-lg text-gray-900">{item.title}</h2>
              <h2 className="text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium text-gray-900">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveler", item.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-shadow
              ${formData?.traveler === item.people && 'shadow-lg border-black'}
              `}
            >
              <h2 className="text-4xl text-gray-900">{item.icon}</h2>
              <h2 className="font-bold text-lg text-gray-900">{item.title}</h2>
              <h2 className="text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 flex justify-end">
        <Button 
          disabled={loading}
          onClick={onGenerateTrip}
          className="bg-orange-600 text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 disabled:bg-gray-400"
        >
          {loading ? 
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" /> 
            : 'Generate Trip'}
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" className="mx-auto" />
              <h2 className="font-bold text-lg mt-7 text-center">Sign In with Google</h2>
              <p className="text-center">Sign In to the app with Google authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center justify-center"
              >
                <FcGoogle className="h-7 w-7" />Sign In with Google
              </Button> 
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
