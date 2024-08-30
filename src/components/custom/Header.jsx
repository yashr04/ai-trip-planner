import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => {
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
    window.location.href = '/';
  };

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 sticky top-0 bg-white dark:bg-gray-900 z-10">
      <a href="/" className="flex items-center gap-2">
        <img src='/logo.svg' className="h-8 w-auto" alt="Logo" />
        <span className="text-xl font-bold text-black dark:text-white">AI Trip Planner</span>
      </a>
      <div className="flex items-center">
        <div className="hidden md:flex items-center mr-4">
          <FiSun className="text-xl text-black dark:text-white" />
          <button
            onClick={toggleDarkMode}
            className="relative inline-flex items-center justify-center h-6 w-11 rounded-full bg-gray-300 dark:bg-gray-700 mx-2 focus:outline-none transition-colors duration-300"
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <span
              className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white dark:bg-gray-900 transition-transform duration-300 ${
                isDarkMode ? 'transform translate-x-5' : ''
              }`}
            />
          </button>
          <FiMoon className="text-xl text-black dark:text-white" />
        </div>
        
        <div className="flex md:hidden items-center mr-4">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDarkMode ? (
              <FiMoon className="text-xl text-black dark:text-white" />
            ) : (
              <FiSun className="text-xl text-black dark:text-white" />
            )}
          </button>
        </div>

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
                  <img src={user?.picture} className="h-8 w-8 rounded-full" alt="User Avatar" />
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
                  <img src={user?.picture} className="h-8 w-8 rounded-full ml-3" alt="User Avatar" />
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
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 absolute top-12 right-0 left-0 shadow-lg">
          <a href='/create-trip' className="w-full text-center p-3 border-b">
            Create Trip
          </a>
          <a href='/my-trips' className="w-full text-center p-3 border-b">
            My Trips
          </a>
        </div>
      )}

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Sign In to AI Trip Planner</DialogTitle>
            <DialogDescription className="text-center">
              Access personalized trip planning and more.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center py-4">
            <Button
              onClick={() => login()}
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 py-2 px-4 rounded-md transition-colors"
            >
              <FcGoogle className="w-6 h-6" />
              <span>Continue with Google</span>
            </Button>
          </div>
          <DialogFooter className="text-center text-sm text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;