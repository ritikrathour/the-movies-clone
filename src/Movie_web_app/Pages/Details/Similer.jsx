import Carousel from "../../Componants/carousel/Carousel";
import { useFetch } from "../../Hooks/useFetch";

const Similer = ({ mediaType, id }) => {
    const {data} = useFetch(`/${mediaType}/${id}/similar`); 
    return (
        <>
            <div className="similar__movies container">
                <h2 className="title" style={{ "fontSize": "20px" }}>Similer Movies</h2>
                <Carousel data={data} />
            </div>
        </>
    )
}
export default Similer;