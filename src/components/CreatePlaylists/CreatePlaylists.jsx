import { useState } from "react"
import axios from "axios"
import { BASE_URL, axiosConfig } from "../../constants/constants"
import { goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


function CreatePlaylists() {
    const [playlistName, setPlaylistName] = useState('');

    const navigate = useNavigate()

    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Nome da Playlist:', playlistName);

        const body = {
            name: playlistName
        }

        axios.post(BASE_URL, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        setPlaylistName("")

        

    };

    return (
        <div>
            <h2>Criar Nova Playlist</h2>

        <button onClick={()=>goToHome(navigate)}> Voltar </button>

            <form onSubmit={handleSubmit}>
                <label htmlFor="playlistName">Nome da Playlist:</label>
                <input
                    type="text"
                    id="playlistName"
                    value={playlistName}
                    onChange={handlePlaylistNameChange}
                    required
                />
                <button type="submit">Criar Playlist</button>
            </form>
        </div>
    );

}

export default CreatePlaylists