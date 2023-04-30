// export default function Avatar(){
//     return (
//         <div className="flex items-center rounded-full bg-slate-300 mb-1">
//             <img
//         src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
//         className="w-12 sm:w-16 lg:w-20 rounded-full shadow-lg"
//         alt="Avatar" />
//             <h1 className=" flex justify-center p-6 ">hello </h1>
//             <h1>afin</h1>

//         </div>
//     );

// }

import React from 'react';

const Avatar = ({ src , name } : any) => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="ml-4 font-medium text-gray-800">{name}</p>
    </div>
  );
};

export default Avatar;


