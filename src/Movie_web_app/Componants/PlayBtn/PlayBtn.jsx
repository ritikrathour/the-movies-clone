 
import "./style.css"
const PlayBtn = ({videoState,setVideoId,videoKey})=>{   
    const clickHandler =()=>{ 
        videoState(true);
        setVideoId(videoKey)
    } 
    
  
    return(
        <>
        <h2 className="play__btn" onClick={()=>clickHandler()}>
        <i className="fa-regular fa-circle-play"></i>
            Watch Trailer
        </h2>
        </>
    )
}
export default PlayBtn;