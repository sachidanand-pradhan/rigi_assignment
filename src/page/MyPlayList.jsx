import React, { useEffect, useState } from "react";
import { useVideo } from "../context/ContextProvider";
import PlayListVideo from "../components/PlayListVideo";
import EmptyPlaylist from "./EmptyPlaylist";

const Playlist = () => {
  const { playList } = useVideo();
  console.log("playlist", playList);

  const [isPlaylist, setIsPlaylist] = useState();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setIsPlaylist(playList);
  }, [playList]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    console.log("selectedVideo", selectedVideo);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const updatedPlaylist = [...isPlaylist];
    const [draggedItem] = updatedPlaylist.splice(draggedIndex, 1);
    updatedPlaylist.splice(newIndex, 0, draggedItem);
    setIsPlaylist(updatedPlaylist);
  };

  return (
    <div className="w-full p-4">
      {selectedVideo && <PlayListVideo selectedVideo={selectedVideo} />}
      <h1 className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto mt-2 p-4 text-2xl font-bold mb-2">
        Your Playlist
      </h1>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto mt-2 p-4 space-y-2">
        {isPlaylist && isPlaylist.length > 0 ? (
          isPlaylist.map((video, index) => (
            <div
              key={video.id || index}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, index)}
              draggable
              className="cursor-grab bg-gray-100 p-2 rounded-md"
            >
              <div
                className="flex gap-2"
                onClick={() => handleVideoClick(video)}
              >
                <img
                  className="w-[100px] h-[100px]"
                  src={video.thumb}
                  alt={video.title}
                />
                <p className="text-blue-500 text-lg hover:underline cursor-pointer">
                  {video.title} | {video.subtitle}
                </p>
              </div>
            </div>
          ))
        ) : (
          // <p>No videos in the playlist.</p>
          <EmptyPlaylist />
        )}
      </div>
    </div>
  );
};

export default Playlist;
