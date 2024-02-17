// <div className="flex flex-col gap-2 mt-2">
//   <div className="w-full">
//     <div
//       className="min-w-full bg-opacity-80 bg-gray-500 h-5 rounded-full cursor-pointe"
//       onClick={checkWidth}
//       ref={clickRef}
//     >
//       <div
//         className="h-full bg-green-500 rounded-full"
//         style={{ width: `${currentVideo.progress + "%"}` }}
//       ></div>
//     </div>
//   </div>
//   <div className="flex gap-3">
//     <BsFillSkipStartCircleFill className="text-4xl" onClick={skipBack} />
//     {isplaying ? (
//       <BsFillPauseCircleFill className="text-4xl" onClick={PlayPause} />
//     ) : (
//       <BsFillPlayCircleFill className="text-4xl" onClick={PlayPause} />
//     )}
//     <BsFillSkipEndCircleFill className="text-4xl" onClick={skiptoNext} />
//   </div>
//   <div className="flex items-center gap-4">
//     <label className="mr-2 font-bold text-lg">
//       Speed:{" "}
//       <strong className="text-black text-lg bg-green-600 p-2 rounded-lg">
//         {speed}
//       </strong>
//     </label>
//     <button
//       className="text-lg  bg-teal-400 hover:bg-blue-900 p-2 rounded-lg"
//       onClick={() => handleSpeedChange(0.5)}
//     >
//       0.5x
//     </button>
//     <button
//       className="text-lg  bg-teal-400 hover:bg-blue-900 p-2 rounded-lg"
//       onClick={() => handleSpeedChange(1.0)}
//     >
//       1.0x
//     </button>
//     <button
//       className="text-lg  bg-teal-400 hover:bg-blue-900 p-2 rounded-lg"
//       onClick={() => handleSpeedChange(1.5)}
//     >
//       1.5x
//     </button>
//     <button
//       className="text-lg  bg-teal-400 hover:bg-blue-500 p-2 rounded-lg"
//       onClick={() => handleSpeedChange(2.0)}
//     >
//       2.0x
//     </button>
//     <div
//       className="flex gap-2 justify-center text-center items-center bg-teal-400 hover:bg-blue-500 p-2 rounded-lg"
//       onClick={handlePlaylistclick}
//     >
//       <MdPlaylistAddCircle className="text-3xl" />
//       PlayList
//     </div>
//   </div>
// </div>

// const formatDuration = (timeInSeconds) => {
//   if (typeof timeInSeconds !== "number" || isNaN(timeInSeconds)) {
//     return "00:00";
//   }

//   const minutes = Math.floor(timeInSeconds / 60);
//   const seconds = Math.floor(timeInSeconds % 60);

//   return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
//     2,
//     "0"
//   )}`;
// };

// const checkWidth = (e) => {
//   let width = clickRef.current.clientWidth;
//   const offset = e.nativeEvent.offsetX;

//   const divprogress = (offset / width) * 100;
//   videoElem.current.currentTime = (divprogress / 100) * currentVideo.length;
// };
