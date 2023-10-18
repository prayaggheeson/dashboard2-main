import React from "react";

const SmallCards = ({ title, desc, imageurl }) => {
  return (
    <div className="bg-white border-gray-300 border flex bg-opacity-10 md:p-6 lg:p-8 rounded-lg shadow-md">
      <img className="w-20 rounded-full h-20 object-cover" src={imageurl}/>
      <div className="px-5">
      <h2 className="text-xl text-white font-medium">{title}</h2>
      <p className="mt-2 text-slate-500">{desc}</p>
      </div>
    </div>
  );
};

export default SmallCards;
