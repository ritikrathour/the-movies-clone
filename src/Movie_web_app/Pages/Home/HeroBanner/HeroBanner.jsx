import "./style.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const searchQueryHandler = (event) => { 
        event.preventDefault(); 
        if ( query.length > 0) {
            navigate(`search/${query}`);
        }
    }
    const { data } = useFetch("/movie/popular");
    const { url } = useSelector(state => state);
    useEffect(() => {
        const bg = url?.backdrop + data?.results?.[Math?.floor(Math?.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);
    return (
        <>
            <div className="heroBanner">
                <div className="container">
                    <img src={background ? background : ""} className="heroBannerIMG" alt="heroBannerImg" />
                    <div className="wrapper">
                        <div className="heroBanner__content">
                            <h2 className="title">Welcome.</h2>
                            <h4 className="subTitile">Millians of movies, TV shows and people to discover. Explore now</h4>
                        </div>
                        <form onSubmit={(e)=>searchQueryHandler(e)} className="serach__content">
                            <input type="search"
                                placeholder="Search for a movie or tv show..."
                                value={query}
                                onChange={(e) => { setQuery(e.target.value) }}
                               />
                            <button type="submit" className="serach__btn">Search</button>
                        </form>
                    </div>
                </div>
                <div className="blur"></div>

            </div>

        </>
    )
}
export default HeroBanner;