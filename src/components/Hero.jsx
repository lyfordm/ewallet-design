import React from 'react'
import mock5 from "../assets/mock-3.png"
const Hero = () => {
  return (
    <div className=" bg-blue py-10 ">
      <div className="flex flex-col justify-center items-center pb-10">
        <h1 className="text-6xl font-Ubuntu font-bold text-lightblue ">
          Wavefund
        </h1>
        <h2 className="text-2xl text-white font-Ubuntu">
          The Modern way of managing your finances on your phone
        </h2>
      </div>
      <div class="flex justify-center gap-4 space-x-2">
        <button
          type="button"
          class="text-white hover:bg-lightblue bg-blue-800 border-white-3 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get App
        </button>
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Alternative
        </button>
      </div>
      <div className="w-3/5 h-full mx-auto">
        <img src={mock5} alt="mock5" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Hero;