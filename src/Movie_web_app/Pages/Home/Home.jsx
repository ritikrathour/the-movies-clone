import "./style.css";
import HeroBanner from "./HeroBanner/HeroBanner"; 
import Tranding from "./Tranding/Tranding";
import Populer from "./populer/Populer";
import TopRated from "./topRated/TopRated";  
const Home = ()=>{ 
    return(
        <>
        <HeroBanner/> 
         <Tranding/>  
        <Populer/>
        <TopRated/>
        </>
    )
}
export default Home;