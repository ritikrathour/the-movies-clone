
import "./style.css"
const DetailsSkeleton = () => {
    return (
        <>
            <div className="details__banner-skeleton container"> 
                <div className="details__row-skeleton">
                    <div className="img__box-skeleton"> 
                    </div>
                    <div className="content-skeleton">
                        <h2 className="details__title-skeleton"></h2>
                        <p 
                        className="description-skeleton"></p> 
                        <div className="details__action-skeleton">
                            <h4 className="rating__skeleton"></h4>
                            <h4 className="play__skeleton"></h4>
                        </div>
                        
                        <h2 className="details__subTitle-skeleton"></h2>
                        <p className="movie__description-skeleton"> </p>
                        <div className="row-skeleton">
                            <h3 className="text-skeleton"> 
                            </h3>
                            <h3 className="text-skeleton"> 
                            </h3>
                            <h3 className="text-skeleton"> 
                            </h3>
                        </div>
                        <div className="text__row-skeleton">
                            <h3 className="text-skeleton"> 
                            </h3>
                        </div>
                        <div className="text__row-skeleton">
                            <h3 className="text-skeleton"> 
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default DetailsSkeleton;