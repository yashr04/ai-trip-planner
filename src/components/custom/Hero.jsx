// import React, { useState } from 'react';
// import { Button } from '../ui/button';
// import { useNavigate } from 'react-router-dom';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog";
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import { FcGoogle } from "react-icons/fc";
// import { FaLinkedin } from 'react-icons/fa';
// import axios from 'axios';
// import emailjs from 'emailjs-com';

// function Hero() {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [formStatus, setFormStatus] = useState('');
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));

//   const login = useGoogleLogin({
//     onSuccess: (tokenInfo) => {
//       console.log(tokenInfo);
//       GetUserProfile(tokenInfo);
//     },
//     onError: (error) => console.log(error),
//   });

//   const GetUserProfile = (tokenInfo) => {
//     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//       headers: {
//         Authorization: `Bearer ${tokenInfo?.access_token}`,
//         Accept: 'application/json',
//       },
//     }).then((resp) => {
//       console.log(resp);
//       localStorage.setItem('user', JSON.stringify(resp.data));
//       setOpenDialog(false);
//       navigate('/create-trip');
//       window.location.reload(); // Reload the page after navigation
//     }).catch((error) => {
//       console.error("Error fetching user profile:", error);
//     });
//   };

//   const handleGetStarted = () => {
//     if (user) {
//       navigate('/create-trip');
//       window.location.reload(); // Reload the page after navigation
//     } else {
//       setOpenDialog(true);
//     }
//   };

//   const handleContactUs = () => {
//     document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send(
//       'service_ytpum7e', 
//       'template_9xhyiw6', 
//       form, 
//       'ZlDpykL44eK7EiXRx'
//     ).then((result) => {
//       setFormStatus('Message sent successfully!');
//       setForm({ name: '', email: '', message: '' });
//     }, (error) => {
//       setFormStatus('Failed to send message. Please try again later.');
//       console.error('EmailJS Error:', error);
//     });
//   };

//   return (
//     <>
//       <div className="relative flex flex-col items-center mx-auto gap-12 py-6 px-4 max-w-screen-xl">
//         <h1 className="font-extrabold text-6xl text-center leading-tight text-gray-900 mb-6">
//           <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span><br /> 
//           Personalized Itineraries at Your Fingertips
//         </h1>
//         <p className="text-xl text-gray-600 text-center max-w-2xl mb-8">
//           Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
//         </p>
//         <div className="flex flex-col items-center md:flex-row md:gap-8">
//           <Button 
//             onClick={handleGetStarted} 
//             className="px-6 py-3 text-lg font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#e25744] transition-transform transform hover:scale-105 mb-4 md:mb-0"
//           >
//             Get Started
//           </Button>
//           <Button 
//             onClick={handleContactUs} 
//             className="px-6 py-3 text-lg font-semibold text-[#f56551] border border-[#f56551] rounded-full hover:bg-[#f56551] hover:text-white transition-transform transform hover:scale-105"
//           >
//             Contact Us
//           </Button>
//         </div>
//         <img src='/landing.png' alt="Landing Illustration" className='w-full max-w-md mt-10' />
//         <div className="flex flex-wrap justify-center gap-8 mt-10">
//           <div className="text-center max-w-xs">
//             <img src="/picture1.png" alt="Picture 1" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="font-bold text-lg">AI-Powered Planning</h3>
//             <p className="text-gray-600">Get personalized itineraries crafted by our advanced AI algorithms.</p>
//           </div>
//           <div className="text-center max-w-xs">
//             <img src="/picture2.png" alt="Picture 2" className="w-26 h-16 mx-auto mb-4" />
//             <h3 className="font-bold text-lg">Budget-Friendly Options</h3>
//             <p className="text-gray-600">Find the best deals and budget-friendly travel plans.</p>
//           </div>
//         </div>
//         <div className="mt-10 max-w-screen-md mx-auto">
//           <h2 className="font-bold text-3xl text-center mb-4">Watch How It Works</h2>
//           <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
//             <iframe 
//               className="absolute top-0 left-0 w-full h-full" 
//               src="https://www.youtube.com/embed/" 
//               title="YouTube video player" 
//               frameBorder="0" 
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//               allowFullScreen 
//             />
//           </div>
//         </div>
//         <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogDescription>
//                 <h2 className="font-bold text-lg text-center">Sign In with Google</h2>
//                 <p className="text-center mb-4">Sign In to the app with Google authentication securely</p>
//                 <Button
//                   onClick={login}
//                   className="w-full flex gap-4 items-center justify-center bg-orange-700 text-white py-3 rounded-full hover:bg-orange-900 transition"
//                 >
//                   <FcGoogle className="h-7 w-7" /> Sign In with Google
//                 </Button>
//               </DialogDescription>
//             </DialogHeader>
//           </DialogContent>
//         </Dialog>
//       </div>
      
//       <div id="contact-us" className="relative flex flex-col items-center mx-auto gap-8 py-16 px-4 max-w-screen-md bg-gray-100 mt-16 rounded-lg shadow-lg">
//         <h2 className="font-bold text-3xl text-center mb-6">Contact Us</h2>
//         <form className="w-full max-w-lg" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input 
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//               id="name" 
//               name="name"
//               type="text" 
//               placeholder="Your name"
//               value={form.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input 
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//               id="email" 
//               name="email"
//               type="email" 
//               placeholder="Your email" 
//               value={form.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea 
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//               id="message" 
//               name="message"
//               rows="5" 
//               placeholder="Your message"
//               value={form.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-between">
//             <Button 
//               type="submit"
//               className="px-6 py-3 text-lg font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#e25744] transition-transform transform hover:scale-105"
//             >
//               Send Message
//             </Button>
//             <a href="https://www.linkedin.com/in/yashraj04/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="text-4xl text-[#0072b1] hover:text-[#005682] transition" />
//         </a>
//           </div>
//           {formStatus && <p className="mt-4 text-center text-sm text-red-500">{formStatus}</p>}
//         </form>
//       </div>
//       <div className="flex justify-center mt-10">
//       </div>
//     </>
//   );
// }

// export default Hero;







import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import emailjs from 'emailjs-com';

function Hero() {
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

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
      navigate('/create-trip');
      window.location.reload(); // Reload the page after navigation
    }).catch((error) => {
      console.error("Error fetching user profile:", error);
    });
  };

  const handleGetStarted = () => {
    if (user) {
      navigate('/create-trip');
      window.location.reload(); // Reload the page after navigation
    } else {
      setOpenDialog(true);
    }
  };

  const handleContactUs = () => {
    document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_ytpum7e', 
      'template_9xhyiw6', 
      form, 
      'ZlDpykL44eK7EiXRx'
    ).then((result) => {
      setFormStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setFormStatus('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <>
      <div className="relative flex flex-col items-center mx-auto gap-12 py-6 px-4 max-w-screen-xl">
        <h1 className="font-extrabold text-4xl md:text-6xl text-center leading-tight text-gray-900 mb-6">
          <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span><br /> 
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <div className="flex flex-col items-center md:flex-row md:gap-8">
          <Button 
            onClick={handleGetStarted} 
            className="px-6 py-3 text-lg font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#e25744] transition-transform transform hover:scale-105 mb-4 md:mb-0"
          >
            Get Started
          </Button>
          <Button 
            onClick={handleContactUs} 
            className="px-6 py-3 text-lg font-semibold text-[#f56551] border border-[#f56551] rounded-full hover:bg-[#f56551] hover:text-white transition-transform transform hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
        <img src='/landing.png' alt="Landing Illustration" className='w-full max-w-md mt-10' />
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="text-center max-w-xs">
            <img src="/picture1.png" alt="Picture 1" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg">AI-Powered Planning</h3>
            <p className="text-gray-600">Get personalized itineraries crafted by our advanced AI algorithms.</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="/picture2.png" alt="Picture 2" className="w-26 h-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg">Budget-Friendly Options</h3>
            <p className="text-gray-600">Find the best deals and budget-friendly travel plans.</p>
          </div>
        </div>
        <div className="mt-10 max-w-screen-md mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-4">Watch How It Works</h2>
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src="https://www.youtube.com/embed/" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </div>
        </div>
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
      
      <div id="contact-us" className="relative flex flex-col items-center mx-auto gap-8 py-16 px-4 max-w-screen-md bg-gray-100 mt-16 rounded-lg shadow-lg">
        <h2 className="font-bold text-2xl md:text-3xl text-center mb-6">Contact Us</h2>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              name="name"
              type="text" 
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              name="email"
              type="email" 
              placeholder="Your email" 
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="message" 
              name="message"
              rows="5" 
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <Button 
              type="submit"
              className="px-6 py-3 text-lg font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#e25744] transition-transform transform hover:scale-105"
            >
              Send Message
            </Button>
            <a href="https://www.linkedin.com/in/yashraj04/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-[#0072b1] hover:text-[#005682] transition" />
            </a>
          </div>
          {formStatus && <p className="mt-4 text-center text-sm text-red-500">{formStatus}</p>}
        </form>
      </div>
      <div className="flex justify-center mt-10">
      </div>
    </>
  );
}

export default Hero;
