import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import noResults from "../../assets/no-results.png";
import MovieCard from "../../Componants/movieCard/MovieCard"
import { ApiMovieData } from "../../utils/api";
const SearchResult = () => {
    const [data, setData] = useState(null)
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();
    const fetchInitialData = () => {
        setLoading(true);
        ApiMovieData(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
            setData(res);
            setPageNum(prev => prev + 1);
            setLoading(false)
        })
    } 
    const fetchNextPageData = () => {
        ApiMovieData(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
            if (data?.results) {
                setData({
                    ...data,
                    results: [...data?.results, ...res?.results ]
                })
            } else {
                setData(res)
            }
            setPageNum(prev => prev + 1); 
        })
    }

    useEffect(() => {
        fetchInitialData();
    }, [query]) 
    return (
        <>
            <div className="searchResultsPage container">
                {loading && <span className="loader" />}

                <h2 className="text">{`Search ${data?.total_results > 1 ? "results" : "result"} of "${query}"`}</h2>
                <div className="Data__container">
                    {!loading && ( 
                        data?.results?.length > 0 ? ( 
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<span className="loader" />}
                            >
                                {data?.results?.map((item) => {
                                    if (item?.media_type === "person") return;
                                    return <MovieCard item={item} key={item?.id}
                                        fromSearch={true} />
                                })}
                            </InfiniteScroll>
                            )
                            :
                            (
                            <div className="no__results">
                                <span>Sorry, Results not found!</span>
                                <img src={noResults} alt="no results" />
                            </div> 
                            ))}
                </div>
            </div>
        </>
    )
}
export default SearchResult;