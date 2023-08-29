import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import CreatePlaylists from "../components/CreatePlaylists/CreatePlaylists";
import AddTrack from "../components/AddTrack/AddTrack";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createplaylist" element={<CreatePlaylists />} />
          <Route path="/addtrack/:playlistId" element={<AddTrack />} />
          </Routes>
      </BrowserRouter>
    );
  }