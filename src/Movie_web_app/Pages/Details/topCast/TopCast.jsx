import { useSelector } from "react-redux";
import "./style.css";
import avatar from "../../../assets/avatar.png";
import TopCastSkeleton from "./TopCastSkeleton";
const TopCast = ({ data, loading }) => {
    const { url } = useSelector(state => state);
    return (
        <>
            <div className="cast__wrapper container">
                {
                    !loading ? (
                        <>
                            <h2 className="title">Top Cast</h2>
                            <div className="cast__container">
                                {
                                    data?.map((cast) => {
                                        const castPosterUrl = url?.backdrop + cast?.profile_path; 
                                        return (
                                            <div className="cast__content" key={cast?.id}>
                                                <div className="cast__img__circle">
                                                    <img src={`${cast?.profile_path ? castPosterUrl : avatar}`} alt={cast?.name} />
                                                </div>
                                                <div className="cast__info">
                                                    <h4 className="text">{cast?.name}</h4>
                                                    <p className="description">{cast?.companey}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    ) : (
                        <TopCastSkeleton />
                    )
                }

            </div>
        </>
    )
}
export default TopCast;