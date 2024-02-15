import React, { useEffect, useState } from "react";
import { useVideo } from "../context/ContextProvider";
import { videoData } from "../data/videoDatas";
import Index from "../components/VideoPlayer/Index";
import MyPlayList from "./MyPlayList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";

const Home = () => {
  const { videoList, setVideoList } = useVideo();
  const [data, setData] = useState([]);

  useEffect(() => {
    setVideoList(videoData);
    setData(videoList);
    // eslint-disable-next-line
  }, [videoList]);

  return (
    <Router>
      {/* <div className="flex w-[100%] p-2 h-[70px] bg-gray-600"> */}
      {/* <div className="w-[70%] m-auto flex justify-between text-center items-center text-white font-extrabold">
          <h1 className="hidden md:block lg:block">
            <Link to="/"> Video Player </Link>
          </h1>
          <div className="flex gap-8 ml-8">
            <Link className="hover:bg-blue-500 p-2 rounded-md" to="/">
              Home
            </Link>
            <Link className="hover:bg-blue-500 p-2 rounded-md" to="/playlist">
              PlayList
            </Link>
          </div>
        </div> */}
      <Navbar />
      {/* </div> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Index videoData={data} />
            </div>
          }
        />
        <Route
          path="/playlist"
          element={
            <div>
              <MyPlayList />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default Home;
