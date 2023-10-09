import Carousel from "../../Componants/carousel/Carousel";
import { useFetch } from "../../Hooks/useFetch";

const Recommendation = ({mediaType,id}) => {
    const {data} = useFetch(`/${mediaType}/${id}/recommendations`)
    return (
        <>
            <div className="similar__movies container" style={{marginTop:"20px"}}>
                <h2 className="title" style={{ "fontSize": "20px" }}>Recommended Movies</h2>
                <Carousel data={data}/>
            </div>
        </>
    )
}
export default Recommendation;