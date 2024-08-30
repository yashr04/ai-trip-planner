// import React from 'react'

// function Footer() {
//   return (
//     <div className='my-7'>
//         <h2 className='text-center text-gray-400'>AI Travel Planner App- Created by Yash Raj</h2>
//     </div>
//   )
// }

// export default Footer




// import React from 'react';
// import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-4">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold">AI Trip Planner App</h2>
//         <p className="mt-2">Created by Yash Raj</p>
//         <div className="flex justify-center gap-6 mt-4">
//           <a href="https://github.com/yashr04" target="_blank" rel="noopener noreferrer">
//             <FaGithub className="h-6 w-6 hover:text-gray-400"/>
//           </a>
//           <a href="https://www.linkedin.com/in/yashraj04/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="h-6 w-6 hover:text-gray-400"/>
//           </a>
//           <a href="mailto:yashraj3247@gmail.com" target="_blank" rel="noopener noreferrer">
//             <FaEnvelope className="h-6 w-6 hover:text-gray-400"/>
//           </a>
//         </div>
//         <div className="mt-6">
//           <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AI Travel Planner App. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;













import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">AI Trip Planner App</h2>
            <p className="mt-2 text-gray-400">Your personal AI-powered travel companion.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/yashr04" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub className="h-8 w-8"/>
            </a>
            <a href="https://www.linkedin.com/in/yashraj04/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="h-8 w-8"/>
            </a>
            <a href="mailto:yashraj3247@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaEnvelope className="h-8 w-8"/>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} AI Trip Planner. All rights reserved. - Created by Yash Raj</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;