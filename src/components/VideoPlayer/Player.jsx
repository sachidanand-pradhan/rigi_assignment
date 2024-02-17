import React, { useEffect, useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { MdPlaylistAddCircle } from "react-icons/md";
import DescriptionComponent from "./ContentDes";
import { useVideo } from "../../context/ContextProvider";

const Player = ({
  videoElem,
  isplaying,
  setisplaying,
  currentVideo,
  setcurrentVideo,
  video,
  setSpeed,
  speed,
}) => {
  const clickRef = useRef();

  const { playList, setPlayList } = useVideo();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const duration = videoElem.current.duration;
    const newCurrentTime = (offset / width) * duration;

    if (!isNaN(newCurrentTime) && isFinite(newCurrentTime)) {
      videoElem.current.currentTime = newCurrentTime;
    }
  };

  const skipBack = () => {
    setcurrentVideo((prevVideo) => {
      const index = video.findIndex((x) => x.title === prevVideo.title);
      const newIndex = index === 0 ? video.length - 1 : index - 1;
      const newVideo = video[newIndex];
      videoElem.current.src = newVideo.url;

      // if i am not putting this Number.isFinite() function, In first clicked progress bar (seek functionality) is failing
      if (Number.isFinite(videoElem.current.duration)) {
        videoElem.current.currentTime = 0;
      }

      return newVideo;
    });
  };

  const skiptoNext = () => {
    console.log("video type and content:", typeof video, video);
    setcurrentVideo((prevVideo) => {
      const index = video.findIndex((x) => x.title === prevVideo.title);
      const newIndex = index === video.length - 1 ? 0 : index + 1;
      const newVideo = video[newIndex];
      videoElem.current.src = newVideo.url;

      // if i am not putting this Number.isFinite() function, In first clicked progress bar (seek functionality) is failing
      if (Number.isFinite(videoElem.current.duration)) {
        // console.log(Number.isFinite(videoElem.current.duration));
        videoElem.current.currentTime = 0;
      }

      return newVideo;
    });
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    videoElem.current.playbackRate = newSpeed;
  };

  const handlePlaylistclick = () => {
    const isPresent = playList.some((el) => el.title === currentVideo.title);

    if (!isPresent) {
      let newPlayList = [...playList, currentVideo];
      setPlayList(newPlayList);
      alert(`Video ${currentVideo.title} added to your playlist`);
    } else {
      alert(`Video ${currentVideo.title} is already in your playlist`);
    }
  };

  useEffect(() => {
    console.log("Updated playList: ", playList);
  }, [playList]);

  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className="w-full">
        <div
          className="min-w-full bg-opacity-80 bg-gray-500 h-5 rounded-full cursor-pointer"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${currentVideo.progress + "%"}` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <BsFillSkipStartCircleFill
          className="text-4xl hover:cursor-pointer"
          onClick={skipBack}
        />
        {isplaying ? (
          <BsFillPauseCircleFill
            className="text-4xl hover:cursor-pointer"
            onClick={PlayPause}
          />
        ) : (
          <BsFillPlayCircleFill
            className="text-4xl hover:cursor-pointer"
            onClick={PlayPause}
          />
        )}
        <BsFillSkipEndCircleFill
          className="text-4xl hover:cursor-pointer"
          onClick={skiptoNext}
        />
        <p className="text-black hover:underline">
          {currentVideo.title} | {currentVideo.subtitle}
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row gap-4">
        <div className="flex gap-4 text-center items-center">
          <label className="mr-2 font-bold text-lg">
            Speed:{" "}
            <strong className="text-black text-lg bg-green-600 p-2 rounded-lg">
              {speed}
            </strong>
          </label>

          <button
            className="text-sm sm:text-lg bg-teal-400 hover:bg-blue-500 p-1 sm:p-2 rounded-lg"
            onClick={() => handleSpeedChange(0.5)}
          >
            0.5x
          </button>

          <button
            className="text-sm sm:text-lg bg-teal-400 hover:bg-blue-500 p-1 sm:p-2 rounded-lg"
            onClick={() => handleSpeedChange(1.0)}
          >
            1.0x
          </button>

          <button
            className="text-sm sm:text-lg bg-teal-400 hover:bg-blue-500 p-1 sm:p-2 rounded-lg"
            onClick={() => handleSpeedChange(1.5)}
          >
            1.5x
          </button>

          <button
            className="text-sm sm:text-lg bg-teal-400 hover:bg-blue-500 p-1 sm:p-2 rounded-lg"
            onClick={() => handleSpeedChange(2.0)}
          >
            2.0x
          </button>
        </div>

        <div
          className="flex gap-2 justify-center text-center items-center bg-teal-400 hover:bg-blue-500 cursor-pointer p-2 rounded-lg"
          onClick={handlePlaylistclick}
        >
          <MdPlaylistAddCircle className="text-3xl" />
          PlayList
        </div>
      </div>
      <div>
        <DescriptionComponent content={currentVideo.description} />
      </div>
    </div>
  );
};

export default Player;
