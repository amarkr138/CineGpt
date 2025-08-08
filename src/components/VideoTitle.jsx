import React from 'react';

const videoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[23%]  px-6 md:px-15 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-xl md:text-4xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 text-sm">{overview}</p>
      <div className='my-2 md:m-0'>
        <button className="bg-white text-black py-2 md:py-3  px-4 md:px-12 text-xl font-semibold rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.8)]  ">
           Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-[rgba(107,114,128,0.5)] font-semibold text-white p-3 px-7 text-lg rounded-lg cursor-pointer hover:bg-[rgba(107,114,128,0.8)] ">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default videoTitle;
