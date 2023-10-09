import "../detailsSkeleton/style.css"
const TopCastSkeleton = () => {
    return (
        <>
            <div className="cast__wrapper__skeleton container">
                <h2 className="title__skeleton"></h2>
                <div className="cast__container__skeleton">
                    <div className="cast__content__skeleton">
                        <div className="cast__img__circle__skeleton">
                        </div>
                        <div className="cast__info__skeleton">
                            <h4 className="text__skeleton"></h4>
                            <p className="description__skeleton"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopCastSkeleton;