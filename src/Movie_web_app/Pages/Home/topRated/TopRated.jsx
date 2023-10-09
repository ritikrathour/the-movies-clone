import { useState } from "react";
import Tabs from "../../../Componants/Tabs";
import Carousel from "../../../Componants/carousel/Carousel";
import { useFetch } from "../../../Hooks/useFetch";
 
const TopRated = ()=>{
    const [endPoint, setEndPoint] = useState("movie");
    const {data,loading } = useFetch(`/${endPoint}/top_rated`);
    
    const onTabChange = (tab) => {
        setEndPoint(tab === "Movie" ? "movie" : "tv");
    }
    return(
        <>  
        <div className="tabs__container container">
                <Tabs data = {["Movies","TV Shows"]} title= "Top Rated" onTabChange={onTabChange}/>
                {
                    !loading?(
                        <Carousel data={data} loading={loading}/>
                    ):( <div className="customLoader">
                    <span className="loader"></span>
                </div>)
                } 
        </div>  
        </>
    )
}
export default TopRated;