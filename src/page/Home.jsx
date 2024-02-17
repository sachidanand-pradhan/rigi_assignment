import React, { useEffect, useState } from "react";
import { useVideo } from "../context/ContextProvider";
import { videoData } from "../data/videoDatas";
import Index from "../components/Index";
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
