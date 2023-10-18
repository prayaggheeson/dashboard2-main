import React from "react";

const RewardCard = (props) => {
  const { imageUrl, title, description } = props;
  return (
    <>
      <div className="mx-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-opacity-10 border-white border bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-center">
          <img className="w-40 h-40 rounded-full" src={imageUrl} alt="Card Image" />
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold text-center text-black">{title}</h2>
            <p className="text-slate-500 text-center mt-2">{description}</p>
            <p className="text-slate-500 text-center mt-2">{description}</p>
            <p className="text-slate-500 text-center mt-2">{description}</p>
            <p className="text-slate-500 text-center mt-2">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardCard;
