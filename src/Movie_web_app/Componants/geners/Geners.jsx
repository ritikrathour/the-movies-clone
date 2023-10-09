import './style.css'
const Geners = ({data})=>{
    return(
        <>
        <ul className='geners__list'>
            {
                data.map((item,index)=>{
                    return(
                        <li className='gener__item' key={index}>{item}</li>
                    )
                })
            }
        </ul>
        </>
    )
}
export default Geners;