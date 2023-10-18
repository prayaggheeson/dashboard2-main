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
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Looks like you are not connected to a wallet
                </h5>
                <p className="mb-3 font-normal text-slate-500 dark:text-gray-400">
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

          <form className=" rounded-lg border border-gray-300 bg-white bg-opacity-30 p-5 sm:p-10 m-8 sm:max-w-md md:max-w-1/2 lg:max-w-full">
            <h1 className="text-xl font-bold text-gray-900 text-center m-5 dark:text-white">
              Selected Token
            </h1>

            <div className="mb-4 w-4/5">
              <div className="flex flex-wrap justify-between">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-violet-900 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  All
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-violet-900 border rounded-full border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  3 month
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-violet-900 border rounded-full border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  6 month
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-violet-900 border rounded-full border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  9 month
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-violet-900 border rounded-full border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  12 month
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="">
                <label className="text-white">Token</label>
                <input
                  type="text"
                  placeholder="Token name"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
              </div>
              <div className="">
                <label className="text-white">Duration</label>
                <input
                  type="text"
                  placeholder="Duration"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
              </div>
              <div className="">
                <label className="text-white">Amount</label>
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
              </div>
              <div className="">
                <label className="text-white">Amount after maturity</label>
                <input
                  type="text"
                  placeholder="Calculate rewards"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-500"
                />
                <div className="mt-4 flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
                  >
                    Stake now!
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Staking;
