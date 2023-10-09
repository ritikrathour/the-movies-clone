
import { useRef } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating";
import posterFallback from "../../assets/no-poster.png"
import { useSelector } from "react-redux";
const Carousel = ({ data }) => {
    const navigate = useNavigate();
    const { url } = useSelector(state => state)
    const wrapperContainer = useRef();
    const scrollCarousel = (dir) => {
        const wrapper = wrapperContainer.current;
        let scrollAmmount = (dir === "left") ? wrapper.scrollLeft - (wrapper.offsetWidth + 10) : wrapper.scrollLeft + wrapper.offsetWidth + 10
        wrapper.scrollTo({
            left: scrollAmmount,
            behavior: "smooth"
        })
    }
    
    return (
        <>
            <div className="carousel_container container">
                <div className="left__arrow" onClick={() => scrollCarousel("left")}><i className="fas fa-angle-left"></i></div>
                <div className="wrapper" ref={wrapperContainer}>
                    {
                        data?.results?.map((item) => {
                            const posterUrl = item?.poster_path ? url?.poster + item?.poster_path : posterFallback;
                            return (
                                <div className="card" 
                                    onClick={() => navigate(`/${item?.media_type ? item?.media_type : "movie"}/${item?.id}`)} key={item?.id}>
                                    <img src={posterUrl} alt={item?.name} />
                                    <Rating rating={item?.vote_average.toFixed(1)} />

                                    <h4 className="name">{item?.title || item.name}</h4>
                                    <p className="date">{item?.release_date}</p>
                                </div>)
                        })
                    }
                </div>
                <div className="right__arrow" onClick={() => scrollCarousel("right")}><i className="fas fa-angle-right"></i></div>
            </div>


        </>
    )
}
export default Carousel;