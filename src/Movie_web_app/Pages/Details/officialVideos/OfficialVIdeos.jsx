 
import "./style.css";  


const OfficialVideos = ({ data, loading, state}) => { 
    const LoadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <>  
            <div className="official__videos__wrapper container">
                <h2 className="title">Official Videos</h2>
                <div className="official__videos__container">
                    {
                        !loading ? (
                            data?.results?.map((video) => {
                                return (
                                    <div className="offical__videos__content" key={video?.id}>
                                        <div className="official__video">
                                            <img src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`} alt={video?.name} />
                                            <i className="fa-regular fa-circle-play play__icon"></i>
                                        </div>
                                        <div className="official__video__info">
                                            <h4 className="text">{video?.name}</h4>
                                        </div>
                                    </div>
                                )
                            })) : (
                            <>
                                <LoadingSkeleton />
                                <LoadingSkeleton />
                                <LoadingSkeleton />
                                <LoadingSkeleton />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default OfficialVideos;