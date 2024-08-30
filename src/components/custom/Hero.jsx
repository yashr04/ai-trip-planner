// // import React, { useState } from 'react';
// // import { Button } from '../ui/button';
// // import { useNavigate } from 'react-router-dom';
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// // } from "@/components/ui/dialog";
// // import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// // import { FcGoogle } from "react-icons/fc";
// // import { FaLinkedin } from 'react-icons/fa';
// // import axios from 'axios';
// // import emailjs from 'emailjs-com';

// // function Hero() {
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [form, setForm] = useState({ name: '', email: '', message: '' });
// //   const [formStatus, setFormStatus] = useState('');
// //   const navigate = useNavigate();
// //   const user = JSON.parse(localStorage.getItem('user'));

// //   const login = useGoogleLogin({
// //     onSuccess: (tokenInfo) => {
// //       console.log(tokenInfo);
// //       GetUserProfile(tokenInfo);
// //     },
// //     onError: (error) => console.log(error),
// //   });

// //   const GetUserProfile = (tokenInfo) => {
// //     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
// //       headers: {
// //         Authorization: `Bearer ${tokenInfo?.access_token}`,
// //         Accept: 'application/json',
// //       },
// //     }).then((resp) => {
// //       console.log(resp);
// //       localStorage.setItem('user', JSON.stringify(resp.data));
// //       setOpenDialog(false);
// //       navigate('/create-trip');
// //       window.location.reload(); // Reload the page after navigation
// //     }).catch((error) => {
// //       console.error("Error fetching user profile:", error);
// //     });
// //   };

// //   const handleGetStarted = () => {
// //     if (user) {
// //       navigate('/create-trip');
// //       window.location.reload(); // Reload the page after navigation
// //     } else {
// //       setOpenDialog(true);
// //     }
// //   };

// //   const handleContactUs = () => {
// //     document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm((prevForm) => ({
// //       ...prevForm,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     emailjs.send(
// //       'service_ytpum7e', 
// //       'template_9xhyiw6', 
// //       form, 
// //       'ZlDpykL44eK7EiXRx'
// //     ).then((result) => {
// //       setFormStatus('Message sent successfully!');
// //       setForm({ name: '', email: '', message: '' });
// //     }, (error) => {
// //       setFormStatus('Failed to send message. Please try again later.');
// //       console.error('EmailJS Error:', error);
// //     });
// //   };

// //   return (
// //     <>
// //       <div className="relative flex flex-col items-center mx-auto gap-12 py-6 px-4 max-w-screen-xl">
// //         <h1 className="font-extrabold text-4xl md:text-6xl text-center leading-tight text-gray-900 mb-6">
// //           <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span><br /> 
// //           Personalized Itineraries at Your Fingertips
// //         </h1>
// //         <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
// //           Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
// //         </p>
// //         <div className="flex flex-col items-center md:flex-row md:gap-8">
// //           <Button 
// //             onClick={handleGetStarted} 
// //             className="px-6 py-3 text-lg font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#e25744] transition-transform transform hover:scale-105 mb-4 md:mb-0"
// //           >
// //             Get Started
// //           </Button>
// //           <Button 
// //             onClick={handleContactUs} 
// //             className="px-6 py-3 text-lg font-semibold text-[#f56551] border border-[#f56551] rounded-full hover:bg-[#f56551] hover:text-white transition-transform transform hover:scale-105"
// //           >
// //             Contact Us
// //           </Button>
// //         </div>
// //         <img src='/landing.png' alt="Landing Illustration" className='w-full max-w-md mt-10' />
// //         <div className="flex flex-wrap justify-center gap-8 mt-10">
// //           <div className="text-center max-w-xs">
// //             <img src="/picture1.png" alt="Picture 1" className="w-16 h-16 mx-auto mb-4" />
// //             <h3 className="font-bold text-lg">AI-Powered Planning</h3>
// //             <p className="text-gray-600">Get personalized itineraries crafted by our advanced AI algorithms.</p>
// //           </div>
// //           <div className="text-center max-w-xs">
// //             <img src="/picture2.png" alt="Picture 2" className="w-26 h-16 mx-auto mb-4" />
// //             <h3 className="font-bold text-lg">Budget-Friendly Options</h3>
// //             <p className="text-gray-600">Find the best deals and budget-friendly travel plans.</p>
// //           </div>
// //         </div>
// //         <div className="mt-10 max-w-screen-md mx-auto">
// //           <h2 className="font-bold text-2xl md:text-3xl text-center mb-4">Watch How It Works</h2>
// //           <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
// //             <iframe 
// //               className="absolute top-0 left-0 w-full h-full" 
// //               src="https://www.youtube.com/embed/" 
// //               title="YouTube video player" 
// //               frameBorder="0" 
// //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// //               allowFullScreen 
// //             />
// //           </div>
// //         </div>
// //         <Dialog open={openDialog} onOpenChange={setOpenDialog}>
// //           <DialogContent>
// //             <DialogHeader>
// //               <DialogDescription>
// //                 <h2 className="font-bold text-lg text-center">Sign In with Google</h2>
// //                 <p className="text-center mb-4">Sign In to the app with Google authentication securely</p>
// //                 <Button
// //                   onClick={login}
// //                   className="w-full flex gap-4 items-center justify-center bg-orange-700 text-white py-3 rounded-full hover:bg-orange-900 transition"
// //                 >
// //                   <FcGoogle className="h-7 w-7" /> Sign In with Google
// //                 </Button>
// //               </DialogDescription>
// //             </DialogHeader>
// //           </DialogContent>
// //         </Dialog>
// //       </div>
      
// //       <div id="contact-us" className="relative flex flex-col items-center mx-auto gap-8 py-16 px-4 max-w-screen-md bg-gray-100 mt-16 rounded-lg shadow-lg">
// //         <h2 className="font-bold text-2xl md:text-3xl text-center mb-6">Contact Us</h2>
// //         <form className="w-full max-w-lg" onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
// //               Name
// //             </label>
// //             <input 
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
// //               id="name" 
// //               name="name"
// //               type="text" 
// //               placeholder="Your name"
// //               value={form.name}
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// //               Email
// //             </label>
// //             <input 
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
// //               id="email" 
// //               name="email"
// //               type="email" 
// //               placeholder="Your email" 
// //               value={form.email}
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
// //               Message
// //             </label>
// //             <textarea 
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
// //               id="message" 
// //               name="message"
// //               rows="5" 
// //               placeholder="Your message"
// //               value={form.message}
// //               onChange={handleChange}
// //             ></textarea>
// //           </div>
// //           <div className="flex items-center justify-between">
// //             <Button 
// //               type="submit"
// //               className="px-6 py-3 text-lg font-semibold text-white bg-[#f56551] rounded-full hover:bg-[#e25744] transition-transform transform hover:scale-105"
// //             >
// //               Send Message
// //             </Button>
// //             <a href="https://www.linkedin.com/in/yashraj04/" target="_blank" rel="noopener noreferrer">
// //               <FaLinkedin className="text-4xl text-[#0072b1] hover:text-[#005682] transition" />
// //             </a>
// //           </div>
// //           {formStatus && <p className="mt-4 text-center text-sm text-red-500">{formStatus}</p>}
// //         </form>
// //       </div>
// //       <div className="flex justify-center mt-10">
// //       </div>
// //     </>
// //   );
// // }

// // export default Hero;









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
//         <h1 className="font-extrabold text-4xl md:text-6xl text-center leading-tight text-gray-900 dark:text-white mb-6">
//           <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span><br /> 
//           Personalized Itineraries at Your Fingertips
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-8">
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
//             <h3 className="font-bold text-lg text-gray-900 dark:text-white">AI-Powered Planning</h3>
//             <p className="text-gray-600 dark:text-gray-300">Get personalized itineraries crafted by our advanced AI algorithms.</p>
//           </div>
//           <div className="text-center max-w-xs">
//             <img src="/picture2.png" alt="Picture 2" className="w-26 h-16 mx-auto mb-4" />
//             <h3 className="font-bold text-lg text-gray-900 dark:text-white">Budget-Friendly Options</h3>
//             <p className="text-gray-600 dark:text-gray-300">Find the best deals and budget-friendly travel plans.</p>
//           </div>
//         </div>
//         <div className="mt-10 max-w-screen-md mx-auto">
//           <h2 className="font-bold text-2xl md:text-3xl text-center text-gray-900 dark:text-white mb-4">Watch How It Works</h2>
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
//                 <h2 className="font-bold text-lg text-center text-gray-900 dark:text-white">Sign In with Google</h2>
//                 <p className="text-center mb-4 text-gray-600 dark:text-gray-300">Sign In to the app with Google authentication securely</p>
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
      
//       <div id="contact-us" className="relative flex flex-col items-center mx-auto gap-8 py-16 px-4 max-w-screen-md bg-gray-100 dark:bg-gray-800 mt-16 rounded-lg shadow-lg">
//         <h2 className="font-bold text-2xl md:text-3xl text-center text-gray-900 dark:text-white mb-6">Contact Us</h2>
//         <form className="w-full max-w-lg" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input 
//               className="shadow appearance-none border dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
//               id="name" 
//               name="name"
//               type="text" 
//               placeholder="Your name"
//               value={form.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input 
//               className="shadow appearance-none border dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
//               id="email" 
//               name="email"
//               type="email" 
//               placeholder="Your email" 
//               value={form.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea 
//               className="shadow appearance-none border dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
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
//               <FaLinkedin className="text-4xl text-[#0072b1] hover:text-[#005682] transition" />
//             </a>
//           </div>
//           {formStatus && <p className="mt-4 text-center text-sm text-red-500 dark:text-red-400">{formStatus}</p>}
//         </form>
//       </div>
//       <div className="flex justify-center mt-10">
//       </div>
//     </>
//   );
// }

// export default Hero;










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

// function Hero() {
//   const [openDialog, setOpenDialog] = useState(false);
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

//   return (
//     <>
//       <div className="relative flex flex-col items-center mx-auto gap-12 py-6 px-4 max-w-screen-xl">
//         <h1 className="font-extrabold text-4xl md:text-6xl text-center leading-tight text-gray-900 dark:text-white mb-6">
//           <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span><br /> 
//           Personalized Itineraries at Your Fingertips
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-8">
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
//             <h3 className="font-bold text-lg text-gray-900 dark:text-white">AI-Powered Planning</h3>
//             <p className="text-gray-600 dark:text-gray-300">Get personalized itineraries crafted by our advanced AI algorithms.</p>
//           </div>
//           <div className="text-center max-w-xs">
//             <img src="/picture2.png" alt="Picture 2" className="w-26 h-16 mx-auto mb-4" />
//             <h3 className="font-bold text-lg text-gray-900 dark:text-white">Budget-Friendly Options</h3>
//             <p className="text-gray-600 dark:text-gray-300">Find the best deals and budget-friendly travel plans.</p>
//           </div>
//         </div>
//         <div className="mt-10 max-w-screen-md mx-auto">
//           <h2 className="font-bold text-2xl md:text-3xl text-center text-gray-900 dark:text-white mb-4">Watch How It Works</h2>
//           <div className="relative w-full h-0" style={{ paddingBottom: '76.25%' }}>
//             <iframe 
//               className="absolute top-16 left-0 w-full h-full" 
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
//                 <h2 className="font-bold text-lg text-center text-gray-900 dark:text-white">Sign In with Google</h2>
//                 <p className="text-center mb-4 text-gray-600 dark:text-gray-300">Sign In to the app with Google authentication securely</p>
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
      
//       <iframe
//             src="https://forms.visme.co/formsPlayer/z41z66qv-contact-form"
//             width="100%"
//             height="990"
//             title="Contact Form"
//           ></iframe>
//     </>
//   );
// }

// export default Hero;









import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import { FaPlane, FaHotel, FaMapMarkedAlt, FaUserFriends, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdRestaurant, MdLocalActivity } from "react-icons/md";
import axios from 'axios';

export default function Hero() {
  const [openDialog, setOpenDialog] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

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
      navigate('/create-trip');
      window.location.reload(); // Reload the page after navigation
    }).catch((error) => {
      console.error("Error fetching user profile:", error);
    });
  };

  const handleGetStarted = () => {
    if (user) {
      navigate('/create-trip');
    } else {
      setOpenDialog(true);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the contact form submission
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const features = [
    { icon: <FaPlane />, title: "AI-Powered Itineraries", description: "Customized travel plans created by advanced AI" },
    { icon: <FaHotel />, title: "Accommodation Finder", description: "Find the perfect stay for your budget and preferences" },
    { icon: <MdRestaurant />, title: "Dining Recommendations", description: "Discover local cuisines and top-rated restaurants" },
    { icon: <MdLocalActivity />, title: "Activity Suggestions", description: "Explore exciting activities and attractions" },
    { icon: <FaMapMarkedAlt />, title: "Interactive Maps", description: "Visualize your trip with detailed, interactive maps" },
    { icon: <FaUserFriends />, title: "Group Planning", description: "Collaborate with friends and family on trip details" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Discover Your Next Adventure with AI
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Personalized Itineraries at Your Fingertips
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </Button>
            <Button
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <img
            src="/landing.png"
            alt="AI Trip Planner Dashboard"
            className="rounded-lg shadow-2xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-20 rounded-lg"></div>
        </div>

        <section id="features" className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose AI Trip Planner?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out animate-fade-in-up"
              >
                <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="bg-blue-600 dark:bg-blue-800 rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Start Planning Your Dream Trip Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 text-center">
              Join thousands of happy travelers who have discovered their perfect itinerary with AI Trip Planner.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Create Your Trip Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Vishek", quote: "AI Trip Planner made organizing my Europe tour a breeze! Highly recommended!" },
              { name: "Aditya", quote: "I was skeptical at first, but the AI-generated itinerary was spot on. Saved me hours of planning." },
              { name: "Rishabh", quote: "The personalized recommendations were fantastic. It felt like having a local guide!" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in-up"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <form onSubmit={handleContactSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full bg-white dark:bg-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full bg-white dark:bg-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AI Trip Planner</h3>
              <p className="text-gray-400">Your personal AI-powered travel companion.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/yashr04" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/yashraj04/" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={24} /></a>
                <a href="mailto:yashraj3247@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaEnvelope size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AI Trip Planner. All rights reserved. - Created by Yash Raj</p>
          </div>
        </div>
      </footer>

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