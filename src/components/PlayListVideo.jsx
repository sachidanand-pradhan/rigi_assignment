import React from "react";
import { useRef, useState, useEffect } from "react";
import Player from "./VideoPlayer/Player";
import { MdFullscreenExit } from "react-icons/md";

const PlayListVideo = ({ selectedVideo }) => {
  const [video, setVideo] = useState(selectedVideo || []);
  const [isplaying, setisplaying] = useState(false);
  const [currentVideo, setcurrentVideo] = useState(selectedVideo[0] || {});
  const [speed, setSpeed] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let newPlayList = [];
    newPlayList.push(selectedVideo);
    setVideo(newPlayList);
    setcurrentVideo(newPlayList[0] || {});
  }, [selectedVideo]);

  const videoElem = useRef();

  useEffect(() => {
    if (isplaying) {
      videoElem.current.play();
    } else {
      videoElem.current.pause();
    }
  }, [isplaying, currentVideo]);

  const onPlaying = () => {
    const duration = videoElem.current.duration;
    const ct = videoElem.current.currentTime;

    setcurrentVideo({
      ...currentVideo,
      progress: (ct / duration) * 100,
      length: duration,
    });

    setCurrentTime(ct);
    setDuration(duration);

    if (videoElem.current.ended) {
      onEnded();
    }
  };

  const onEnded = () => {
    const index = video.findIndex((x) => x.title === currentVideo.title);
    const newIndex = (index + 1) % video.length;
    const nextVideo = video[newIndex];

    setcurrentVideo(nextVideo);

    videoElem.current.src = nextVideo.url;
    videoElem.current.addEventListener("canplay", () => {
      videoElem.current.play();
    });
  };

  const formatDuration = (timeInSeconds) => {
    if (typeof timeInSeconds !== "number" || isNaN(timeInSeconds)) {
      return "00:00";
    }

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      // Exit fullscreen if already in fullscreen mode
      document.exitFullscreen();
    } else if (videoElem.current.requestFullscreen) {
      // Request fullscreen for the video element
      videoElem.current.requestFullscreen();
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto mt-2 p-4">
      <video
        className="rounded-md bg-black"
        width="750"
        height="350"
        ref={videoElem}
        onTimeUpdate={onPlaying}
        onClick={() => setisplaying(!isplaying)}
        src={currentVideo.url}
        autoPlay
      >
        {/* <source src={currentVideo.url} type="video/mp4"></source> */}
      </video>
      <div className="flex justify-between text-lg font-bold">
        <div className="w-[93%] flex justify-between">
          <p>{formatDuration(currentTime)}</p>
          <p>{formatDuration(duration)}</p>
        </div>
        <MdFullscreenExit
          className="text-2xl hover:cursor-pointer text-center items-start"
          onClick={handleFullScreen}
        />
      </div>
      <Player
        video={video}
        setVideo={setVideo}
        isplaying={isplaying}
        setisplaying={setisplaying}
        videoElem={videoElem}
        currentVideo={currentVideo}
        setcurrentVideo={setcurrentVideo}
        speed={speed}
        setSpeed={setSpeed}
      />
    </div>
  );
};

export default PlayListVideo;
