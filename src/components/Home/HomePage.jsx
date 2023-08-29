import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, axiosConfig } from "../../constants/constants"
import { goToAddTrack, goToCreatePlaylist, goToHome } from "../../routes/coordinator"
import { Link, useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()
    const [playLists, setPlaylists] = useState([])

    useEffect(() => {

        axios.get(BASE_URL, axiosConfig).then((res) => {
                setPlaylists(res.data.result.list)
                console.log(res.data.result.list)
         } ).catch((err) => console.log(err))


        

    }, [])

    return (<>


        Estamos na home<br />

        <button onClick={()=>goToCreatePlaylist(navigate)}> Playlists  </button>

        <br />
        Minhas playlists:
      
{playLists ? (
  <ul>
    {playLists.map((list) => (
      <li key={list.id}>
        <p onClick={()=>goToAddTrack(navigate, list.id)}>{list.name} 
        </p>
      </li>
    ))}
  </ul>
) : (
  <button onClick={() => goToCreatePlaylist(navigate)}>
    Crie sua primeira playlist
  </button>
)}

    </>)


}

export default HomePage