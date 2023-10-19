import React from "react";
import Card from "../Components/Card";
import SmallCards from "../Components/SmallCards";
import Chart from "../Components/Chart";

const Overview = () => {
  const cardData = [
    {
      imageUrl: "https://bsstaking.io/stake-icon-news.png",
      title: "Stakes",
      description: "Stake Tokens and receive rewards",
    },
    {
      imageUrl: "https://bsstaking.io/reward-icon.png",
      title: "Rewards",
      description: "Claim your rewards in BS token",
    },
    {
      imageUrl: "https://bsstaking.io/BSIcon.png",
      title: "Total Stake",
      description: "Total Amount of Contracts Staked",
    },
  ];
  const cards = [
    {
      title: "Total supply",
      imageurl: "https://bsstaking.io/Market-Cap.png",
      desc: "description of the card",
    },
    {
      title: "Total value",
      imageurl: "https://bsstaking.io/Market-Cap.png",
      desc: "description of the card",
    },
    {
      title: "All time high",
      imageurl: "https://bsstaking.io/Market-Cap.png",
      desc: "description of the card",
    },
  ];

  return (
    <div className="mx-auto">
      
      <div className="mt-5 flex border gap-5 border-yellow-300  flex-wrap ">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      
      <div className="grid p-14 grid-cols-1 md:grid-cols-5 overflow-auto">
        <div className="md:col-span-4">
          <Chart />
        </div>
        <div className="md:col-span-1">
          <div className="grid  grid-rows-1 border sm:w-full border-black md:grid-rows-3 gap-5">
            {cards.map((card, index) => (
              <SmallCards
                key={index}
                title={card.title}
                desc={card.desc}
                imageurl={card.imageurl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
