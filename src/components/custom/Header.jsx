import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => {
      console.log(tokenInfo);
      GetUserProfile(tokenInfo);
    },
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'application/json',
      },
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload();
    }).catch((error) => {
      console.error("Error fetching user profile:", error);
    });
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 sticky top-0 bg-white z-10">
      <div className="flex items-center gap-2">
        <img src='/logo.svg' className="h-8 w-auto" />
        <span className="text-xl font-bold">AI Trip Planner</span>
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <div className="hidden md:flex items-center gap-3">
              <a href='/create-trip'>
                <Button variant="outline" className="rounded-full px-4 py-2 text-sm">+ Create Trip</Button>
              </a>
              <a href='/my-trips'>
                <Button variant="outline" className="rounded-full px-4 py-2 text-sm">My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger>
                  <img src={user?.picture} className="h-8 w-8 rounded-full"/>
                </PopoverTrigger>
                <PopoverContent className="p-2 w-50">
                  <h2
                    className="cursor-pointer text-sm text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
              <Popover>
                <PopoverTrigger>
                  <img src={user?.picture} className="h-8 w-8 rounded-full ml-3"/>
                </PopoverTrigger>
                <PopoverContent className="p-2 w-50">
                  <h2
                    className="cursor-pointer text-sm text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
          </>
        ) : (
          <Button onClick={() => setOpenDialog(true)} className="px-4 py-2 text-sm">Sign In</Button>
        )}
      </div>
      {isMobileMenuOpen && user && (
        <div className="md:hidden flex flex-col items-center bg-white absolute top-12 right-0 left-0 shadow-lg">
          <a href='/create-trip' className="w-full text-center p-3 border-b">
            Create Trip
          </a>
          <a href='/my-trips' className="w-full text-center p-3 border-b">
            My Trips
          </a>
          {/* <button className="w-full text-center p-3 text-red-600" onClick={handleLogout}>
            Logout
          </button> */}
        </div>
      )}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <h2 className="font-bold text-lg text-center">Sign In with Google</h2>
              <p className="text-center mb-4">Sign In to the app with Google authentication securely</p>
              <Button
                onClick={login}
                className="w-full flex gap-4 items-center justify-center bg-orange-700 text-white py-3 rounded-full hover:bg-orange-900 transition"
              >
                <FcGoogle className="h-7 w-7" /> Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
