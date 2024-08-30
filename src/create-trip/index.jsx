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
  const [noOfDays, setNoOfDays] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDaysInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNoOfDays(value);
      handleInputChange("noOfDays", value);
    }
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
      onGenerateTrip();
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

  const isFormComplete = () => {
    return formData.location && formData.noOfDays && formData.budget && formData.traveler;
  };

  const onGenerateTrip = async () => {
    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (!isFormComplete()) {
      toast("Please fill all details.");
      return;
    }

    setGenerating(true);
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
    setGenerating(false);
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
    <div className="bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 sm:p-12">
          <h2 className="font-bold text-4xl text-blue-600 dark:text-blue-400 mb-2">
            Plan Your Dream Trip
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl mb-8">
            Let our AI-powered trip planner create a personalized itinerary just for you.
          </p>
          
          <div className="space-y-12">
            <div className="relative">
              <h2 className="text-2xl mb-3 font-semibold text-gray-900 dark:text-white">
                Destination
              </h2>
              <div className="relative z-50">
                <GooglePlacesAutocomplete
                  apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                  selectProps={{
                    place,
                    onChange: (v) => {
                      setPlace(v);
                      handleInputChange("location", v);
                    },
                    styles: {
                      control: (provided) => ({
                        ...provided,
                        borderRadius: '0.5rem',
                        borderColor: '#e2e8f0',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        '&:hover': {
                          borderColor: '#cbd5e0',
                        },
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                        position: 'absolute',
                        width: '100%',
                        marginTop: '4px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      }),
                      menuList: (provided) => ({
                        ...provided,
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.5rem',
                      }),
                    },
                  }}
                />
              </div>
            </div>
            
            <div className="transition-all duration-300 ease-in-out">
              <h2 className="text-2xl mb-3 font-semibold text-gray-900 dark:text-white">
                Trip Duration
              </h2>
              <Input
                placeholder="Number of days (e.g., 3)"
                type="text"
                value={noOfDays}
                onChange={handleDaysInputChange}
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="transition-all duration-300 ease-in-out">
              <h2 className="text-2xl mb-3 font-semibold text-gray-900 dark:text-white">
                Budget
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SelectBudgetOptions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleInputChange("budget", item.title)}
                    className={`p-4 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out
                    ${formData?.budget === item.title 
                      ? "bg-blue-100 dark:bg-blue-900 border-blue-500 shadow-md" 
                      : "hover:bg-blue-50 dark:hover:bg-gray-700"}
                    `}
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="transition-all duration-300 ease-in-out">
              <h2 className="text-2xl mb-3 font-semibold text-gray-900 dark:text-white">
                Travel Companions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SelectTravelesList.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleInputChange("traveler", item.people)}
                    className={`p-4 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out
                    ${formData?.traveler === item.people 
                      ? "bg-blue-100 dark:bg-blue-900 border-blue-500 shadow-md" 
                      : "hover:bg-blue-50 dark:hover:bg-gray-700"}
                    `}
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button 
              disabled={loading || generating || !isFormComplete()}
              onClick={onGenerateTrip}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {generating ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin h-6 w-6 mr-2" />
                  Generating...
                </>
              ) : (
                'Generate My Trip'
              )}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="bg-white dark:bg-gray-800 rounded-lg p-8">
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" className="w-24 h-24 mx-auto mb-6" />
              <h2 className="font-bold text-2xl mb-4 text-center text-gray-900 dark:text-white">
                Sign In with Google
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Securely sign in to access personalized trip planning features
              </p>
              <Button
                onClick={login}
                className="w-full py-3 flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg border border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <FcGoogle className="h-6 w-6" />
                <span>Sign In with Google</span>
              </Button> 
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;