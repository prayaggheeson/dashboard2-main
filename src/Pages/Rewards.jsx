import React from "react";
import RewardCard from "../Components/RewardCard";

const Rewards = () => {
  const cardData = [
    {
      imageUrl: "https://bsstaking.io/earning.png",
      title: "Stakes",
      description: "Stake Tokens and receive rewards",
    },
    {
      imageUrl: "https://bsstaking.io/reward-icon.png",
      title: "Rewards",
      description: "Claim your rewards in BS token",
    },
    {
      imageUrl: "https://bsstaking.io/stake-icon-news.png",
      title: "Total Stake",
      description: "Total Amount of Contracts Staked",
    },
  ];
  return (
    <div className="bg-slate-300 bg-opacity-0 py-10 justify-evenly">
      <h1 className="text-3xl font-bold text-white text-center py-10">BS Token Stake</h1>
      <div className="gap-6 flex flex-wrap items-center justify-center">
        {cardData.map((card, index) => (
          <RewardCard key={index} {...card} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-white text-center py-10">BS-MATIC Pool Stake</h1>
      <div className=" gap-6  flex-wrap flex items-center justify-center">
        {cardData.map((card, index) => (
          <RewardCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Rewards;
