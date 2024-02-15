import React, { useEffect, useState } from "react";
import { useVideo } from "../context/ContextProvider";
import PlayListVideo from "../components/VideoPlayer/PlayListVideo";

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Playlist</h1>
      <div className="space-y-2">
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
              <p
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                {video.title}
              </p>
            </div>
          ))
        ) : (
          <p>No videos in the playlist.</p>
        )}
      </div>
      {selectedVideo && <PlayListVideo selectedVideo={selectedVideo} />}
    </div>
  );
};

export default Playlist;
