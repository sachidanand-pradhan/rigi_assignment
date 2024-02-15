import React, { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [playList, setPlayList] = useState([]);

  return (
    <VideoContext.Provider
      value={{
        videoList,
        setVideoList,
        playList,
        setPlayList,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};

export default VideoContext;
