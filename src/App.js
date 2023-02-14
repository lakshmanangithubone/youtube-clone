import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
