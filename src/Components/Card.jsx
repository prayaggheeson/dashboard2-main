import React from "react";

const Card = (props) => {
  const { imageUrl, title, description } = props;

  return (
    <div className="mx-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-opacity-10 border-gray-300 border bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
      <img
        className="w-20 h-20 rounded-full object-cover mt-2"
        src={imageUrl}
        alt="Card Image"
      />
      <div className="py-4 px-6 text-center">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-slate-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
