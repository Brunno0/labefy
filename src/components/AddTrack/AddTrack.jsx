import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, axiosConfig } from "../../constants/constants";

function AddTrack() {
  const [trackName, setTrackName] = useState("");
  const [trackArtist, setTrackArtist] = useState("");
  const [trackUrl, setTrackUrl] = useState("");
  const [tracks, setTracks] = useState([]);

  const { playlistId } = useParams();

  const handleTrackNameChange = (e) => setTrackName(e.target.value);
  const handleTrackArtistChange = (e) => setTrackArtist(e.target.value);
  const handleTrackUrlChange = (e) => setTrackUrl(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      name: trackName,
      artist: trackArtist,
      url: trackUrl,
    };

    axios
      .post(`${BASE_URL}/${playlistId}/tracks`, body, axiosConfig)
      .then((response) => {
        console.log("Faixa adicionada com sucesso:", response.data);
        setTrackName("");
        setTrackArtist("");
        setTrackUrl("");
      })
      .catch((error) => {
        console.error("Erro ao adicionar faixa:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${playlistId}/tracks`, axiosConfig)
      .then((res) => {
        setTracks(res.data.result.tracks);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Adicionar Faixa a Playlist</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trackName">Nome da Música:</label>
        <input
          type="text"
          id="trackName"
          value={trackName}
          onChange={handleTrackNameChange}
          required
        />
        <label htmlFor="trackArtist">Artista:</label>
        <input
          type="text"
          id="trackArtist"
          value={trackArtist}
          onChange={handleTrackArtistChange}
          required
        />
        <label htmlFor="trackUrl">URL da Música:</label>
        <input
          type="text"
          id="trackUrl"
          value={trackUrl}
          onChange={handleTrackUrlChange}
          required
        />
        <button type="submit">Adicionar Faixa</button>
      </form>

      <div>
        <h3>Músicas:</h3>
        <ol>
          {tracks.map((track) => (
            <li key={track.id}>{track.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AddTrack;
