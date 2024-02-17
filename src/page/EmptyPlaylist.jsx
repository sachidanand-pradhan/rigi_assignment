import React from "react";
import { Link } from "react-router-dom";

const EmptyPlaylist = () => {
  return (
    <div className="w-[300px] m-auto text-center flex flex-col gap-2">
      <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Your Playlist is Empty.
      </p>
      <Link to="/" className="p-4 bg-gray-800 text-white rounded-lg">
        Add video
      </Link>
    </div>
  );
};

export default EmptyPlaylist;
