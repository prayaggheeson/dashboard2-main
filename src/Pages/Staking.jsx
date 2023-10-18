import React from "react";
import Card from "../Components/Card";

const Staking = () => {
  const cardData = [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Stakes",
      description: "Stake Tokens and receive rewards",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Rewards",
      description: "Claim your rewards in BS token",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Total Stake",
      description: "Total Amount of Contracts Staked",
    },
  ];

  return (
    <div className="bg-slate-300 bg-opacity-0 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2">
            <div className="bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Looks like you are not connected to a wallet
                </h5>
                <p className="mb-3 font-normal text-black dark:text-gray-400">
                  Connect your wallet to access this section.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect Wallet
                </a>
              </div>
            </div>
          </div>

          <div className="py-10 flex flex-col items-center justify-evenly w-full">
            <div className="flex flex-wrap justify-center gap-5">
              {cardData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>

          <form className="w-full max-w-md rounded-lg border border-gray-300 bg-white bg-opacity-30 p-5 sm:p-10 m-8 sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="text-xl font-bold text-gray-900 text-center m-5 dark:text-white">
              Selected Token
            </h1>

            <div className="mb-4">
              <div className="flex flex-wrap justify-between">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  All
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border rounded-lg border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  3 month
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border rounded-lg border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  6 month
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border rounded-lg border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  9 month
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border rounded-lg border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  12 month
                </button>
              </div>
            </div>

            <div className="grid grid-flow-row">
              <div className="w-1/4">
                <label className=" text-white">Token</label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder="Token name"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
              </div>
              <div className="w-1/4">
                <label className=" text-white">Duration</label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder="Duration"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
              </div>
              <div className="w-1/4">
                <label className=" text-white">Amount</label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
              </div>
              <div className="w-1/4">
                <label className=" text-white">Amount after maturity</label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder="Calculate rewards"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
              >
                Stake now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Staking;
