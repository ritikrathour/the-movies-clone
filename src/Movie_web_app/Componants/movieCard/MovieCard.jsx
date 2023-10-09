import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import noPoster from "../../assets/no-poster.png";
import Rating from "../Rating/Rating"
const MovieCard = ({ item, fromSearch, media_type }) => {
    const navigate = useNavigate()
    const { url } = useSelector(state => state)
    const poster_path =item?.backdrop_path ? url?.backdrop + item?.backdrop_path :noPoster; 
    return (
        <>
            <div className="card"
                onClick={() =>
                    navigate(`/${item?.media_type ? item?.media_type : "movie"}/${item?.id}`)} key={item?.id} 
                    >
                <div className="image">
                    <img src={poster_path} alt={item?.title} />
                </div>
                {!fromSearch && 
                    <div className="rating">
                        <Rating rating={item?.vote_average.toFixed(1)}/>
                    </div>
                }
                <h4 className="name">{item?.title || item?.name}</h4>
                <p className="date">{item?.release_date}</p>
            </div>
        </>
    )
}
export default MovieCard;