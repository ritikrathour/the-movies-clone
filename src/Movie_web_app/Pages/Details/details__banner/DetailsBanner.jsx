
import { useSelector } from "react-redux";
import PlayBtn from "../../../Componants/PlayBtn/PlayBtn";
import Rating from "../../../Componants/Rating/Rating"; 
import fallbackImage from "../../../assets/no-poster.png"
import "./style.css"
import { useFetch } from "../../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import moment from "moment/moment";

const DetailsBanner = ({video ,state, crew, setVideoId }) => {

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes} m` : ""}`
    } 
    
    const { url } = useSelector(state => state);
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`) 
    const posterUrl = url?.backdrop + data?.backdrop_path;
    const director = crew?.filter((f) => f.job === "Director");
    const writers = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");
 
    return (
        <>
            <div className="details__banner container">
                {
                    !loading ? (
                        <div className="details__banner-container">
                            <div className="img__box">
                                <img src={data?.backdrop_path ? posterUrl : fallbackImage} alt="" />
                            </div>
                            <div className="content">
                                <h2 className="details__title">{`${data?.name || data?.title} (${data?.release_date})`}</h2>
                                <p className="description">{data?.tagline}</p>
                                <div className="details__actions">
                                    <div className="rating">
                                        <Rating rating={data?.vote_average?.toFixed(1)} />
                                    </div> 
                                    <PlayBtn videoState={state} setVideoId={setVideoId} videoKey={video?.key}/> 
                                </div>
                                <h2 className="details__subTitle">Overview</h2>
                                <p className="movie__description">{data?.overview}</p>
                                <div className="details__movie__about">
                                    <h3 className="text">
                                        Status: <span className="text__light">{data?.status}</span>
                                    </h3>
                                    <h3 className="text">
                                        Releas Date: <span className="text__light">{moment(data?.release_date).format("MMM Do YY")}</span>
                                    </h3>
                                    <h3 className="text">
                                        Runtime: <span className="text__light">{toHoursAndMinutes(data?.runtime)}</span>
                                    </h3>
                                </div>
                                <div className="director">
                                    {director?.length > 0 && (
                                        <h3 className="text">
                                            Diretor: {director?.map((d, index) => { 
                                                return <span className="text__light" key={index}>
                                                    {d?.name}
                                                    {director?.length - 1 !== 1 &&  ", "}</span>
                                            })}
                                        </h3>
                                    )}
                                </div>
                                <div className="writer">
                                {writers?.length > 0 && (
                                        <h3 className="text">
                                            Writers: {writers?.map((d, index) => { 
                                                return <span className="text__light" key={index}>
                                                    {d?.name}
                                                    {writers?.length - 1 !== 1 && ", "}</span>
                                            })}
                                        </h3>
                                    )} 
                                     {data?.created_by?.length > 0 && (
                                        <h3 className="text">
                                            Creater: {data?.created_by?.map((d, index) => { 
                                                return <span className="text__light" key={index}>
                                                    {d?.name}
                                                    {data?.created_by?.length - 1 !== 1 && ", "}</span>
                                            })}
                                        </h3>
                                    )} 
                                </div>
                            </div>
                        </div>
                    ) : (
                        <span className="loader"></span>
                    )
                }
            </div>
        </>
    )
}
export default DetailsBanner;