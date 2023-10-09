
import ReactPlayer from "react-player";
import "./style.css";
const VideoPopup = ({action, state, videoId}) => {  
    return (
        <>
            <div className={`popup__backdrop ${state ? "active " : ""}`}onClick={() => action()}></div>
            <div className={`video__popup ${state ? "active" : ""}`}>
                <div className="close__video__popup" onClick={() => action()}><i className="fas fa-times"></i></div>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    // playing={true} 
                />
            </div>
        </>
    )
}
export default VideoPopup; 