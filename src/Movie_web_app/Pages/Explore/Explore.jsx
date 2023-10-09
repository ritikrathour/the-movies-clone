import React, { useState, useEffect } from "react";
import MovieCard from "../../Componants/movieCard/MovieCard";
import "./style.css"; 
import InfiniteScroll from "react-infinite-scroll-component";
import noResults from "../../assets/no-results.png";
import { ApiMovieData } from "../../utils/api";
import { useParams } from "react-router-dom";

const Explore = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false); 
    const { mediaType } = useParams();  
    const fetchInitialData = () => {
        setLoading(true);
        ApiMovieData(`/discover/${mediaType}`).then((res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        });
    }; 

    const fetchNextPageData = () => {
        ApiMovieData(`/discover/${mediaType}?page=${pageNum}`)
            .then((res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            });
    };
    useEffect(() => {
        setData(null);
        fetchInitialData()
    }, [mediaType]);
    return (
        <>
            <section className="explore__container container">

                <div className="explore__field">

                    {loading && <span className="loader"/>}
                    {!loading && (
                        <>
                        <h3 className="pageTitle">{mediaType === "tv"
                            ? "Explore TV Shows"
                            : "Explore Movies"}
                    </h3>
                            {data?.results?.length > 0 ? (
                                <InfiniteScroll
                                    className="content"
                                    dataLength={data?.results?.length || []}
                                    next={fetchNextPageData}
                                    hasMore={pageNum <= data?.total_pages}
                                    loader={ <span className="loader"/>}
                                > 
                                    {data?.results?.map((item) => {
                                        if (item.media_type === "person") return;
                                        return (
                                            <MovieCard
                                                key={item?.id}
                                                item={item}
                                                mediaType={mediaType}
                                            />
                                        );
                                    })} 
                                </InfiniteScroll>
                            ) : (
                                <div className="no__results">
                                <span>Sorry, Results not found!</span>
                                <img src={noResults} alt="no results" />
                            </div> 
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    )
}
export default Explore;