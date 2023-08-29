export const goToHome = (navigate) =>{
    navigate('/')
}
export const goToCreatePlaylist = (navigate) =>{
    navigate('/createPlaylist')
}


export const goToAddTrack = (navigate, id) =>{
    navigate(`/addtrack/${id}`)
}
