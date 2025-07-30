import React from "react";
const Card = (pops) => {

  return (
   <div className='bg-white text-black inline-block p-6 text-center' >
    <img className='h-32 w-32 round-full mb-3'src="" alt="" />
   <h1 className="text-2xl font-semibold mb-4">{pops.user} Surname </h1>
   <h2>{pops.city},{pops.age}</h2>
   <button className="mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium">Submit</button>
   </div>
   
  );
};

export default Card;