import { useState } from "react";
import Tabs from "../../../Componants/Tabs";
import Carousel from "../../../Componants/carousel/Carousel";
import { useFetch } from "../../../Hooks/useFetch";
const Tranding = () => {
    const [endPoint, setEndPoint] = useState("day");
    const {data,loading } = useFetch(`/trending/all/${endPoint}`); 
    
    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
    }  
    return (
        <>
            <div className="tabs__container container">
                <Tabs data={["Day", "Week"]} title="Tranding" onTabChange={onTabChange} />
                {
                        !loading?(
                        <Carousel data={data} loading={loading}/>
                    ):(  <div className="customLoader">
                    <span className="loader"></span>
                </div>)
                }
                
            </div>
        </>
    )
}
export default Tranding;