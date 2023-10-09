import { useState } from "react";
import DetailsSkeleton from "./detailsSkeleton/DetailsSkeleton";
import DetailsBanner from "./details__banner/DetailsBanner";
import OfficialVideos from "./officialVideos/OfficialVIdeos";
import TopCast from "./topCast/TopCast";
import TopCastSkeleton from "./topCast/TopCastSkeleton";
import VideoPopup from "../../Componants/videoPopup/VideoPopup";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import Similer from "./Similer";
import Recommendation from "./Recommendation";


const Details = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const closeHandeler = () => {
        setShowPopup(false);
        setVideoId(null)
    } 
    
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
    return (
        <>
            <VideoPopup
                videoId={videoId}
                state={showPopup}
                action={closeHandeler}
                    />
            {
                creditsLoading ?
                    (<><DetailsSkeleton /> <TopCastSkeleton /></>)
                    :
                    (<>
                        <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} state={setShowPopup} setVideoId={setVideoId} />
                        <TopCast data={credits?.cast} loading={creditsLoading} />
                        <OfficialVideos data={data} loading={loading} />
                        <Similer mediaType={mediaType} id={id} />
                        <Recommendation mediaType={mediaType} id={id} />
                    </>)
            }

        </>
    )
}
export default Details;