import React from "react";
import Card from "../Components/Card";

const UserDashboard = () => {
  const cardData = [
    {
      imageUrl: "https://bsstaking.io/stake-icon-news.png",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
    {
      imageUrl: "https://bsstaking.io/earning.png",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
    {
      imageUrl: "https://bsstaking.io/reward-icon.png",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
    {
      imageUrl: "https://bsstaking.io/stake-icon-news.png",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col sm:py-3 items-center">
        
          <div className="xl:flex sm:flex-row  border border-white gap-5 py-5">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        

        <div className="w-full flex flex-wrap gap-5 justify-center">
          <button
            type="button"
            className="px-6 py-2 text-sm  bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 text-white    rounded-full hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            All
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 text-white   rounded-full  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            3 month
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm  bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 text-white   rounded-full  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            6 month
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm  bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 text-white   rounded-full  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover.text-white dark.hover.bg-gray-700 dark.focus.bg-gray-700"
          >
            9 month
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm  bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 text-white  rounded-full  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover.text-white dark.hover.bg-gray-700 dark.focus.bg-gray-700"
          >
            12 month
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
