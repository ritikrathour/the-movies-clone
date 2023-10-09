import axios from "axios";
import { useState } from "react"

const Check = ()=>{
    const [data,setData] = useState(null);
    const res = axios.get("http://localhost:4000").then((res)=>{
        console.log("checkking");
        setData(res)
    })
    console.log(res);
    return (
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae, voluptatibus ducimus suscipit vel iusto laudantium est, consequatur et corporis eum totam perferendis doloribus nemo sed reprehenderit odio expedita asperiores!</p>
        {data?.map((item)=>{
            return (
                <div key={item?.id}>
                    {item.titel}
                    {item.joke}
                </div>
            )
        })}
        </>
    )
}
export default Check