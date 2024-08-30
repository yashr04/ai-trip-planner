// import { db } from '@/service/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react'
// import { useNavigation } from 'react-router-dom';
// import UserTripCardItem from './components/UserTripCardItem';

// function MyTrips() {
//   const navigation=useNavigation();
//   const [userTrips,setUserTrips]=useState([]);
//   useEffect(()=>{
//     GetUserTrips();
//   },[])

//   /**
//    * Used to get all user trips
//    * @returns 
//    */

//   const GetUserTrips=async()=>{
//       const user=JSON.parse(localStorage.getItem('user'));
      
//       if(!user)
//       {
//         navigation('/');
//         return;
//       }
      
//       const q=query(collection(db,'AITrips'),where('userEmail','==',user?.email));
//       const querySnapshot = await getDocs(q);
//       setUserTrips([]);
// querySnapshot.forEach((doc) => {

//   console.log(doc.id, " => ", doc.data());
//   setUserTrips(prevVal=>[...prevVal,doc.data()])
// });
//   }

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>My Trips</h2>
//       <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
//         {userTrips?.length > 0
//           ? userTrips.map((trip, index) => (
//             <UserTripCardItem trip={trip} key={index} />
//           ))
//           : [1, 2, 3, 4, 5, 6].map((item, index) => (
//             <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default MyTrips;














import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, [])

  /**
   * Used to get all user trips
   * @returns 
   */
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
      navigate('/');
      return;
    }
    
    const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prevVal => [...prevVal, doc.data()])
    });
  }

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className='font-bold text-4xl text-blue-600 dark:text-blue-400 mb-8'>My Trips</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {userTrips?.length > 0
            ? userTrips.map((trip, index) => (
              <UserTripCardItem trip={trip} key={index} />
            ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className='h-[220px] w-full bg-blue-200 dark:bg-gray-700 animate-pulse rounded-xl shadow-md'>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyTrips;