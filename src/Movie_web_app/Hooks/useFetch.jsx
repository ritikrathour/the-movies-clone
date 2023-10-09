import { useEffect, useState } from "react"
import { ApiMovieData } from "../utils/api";


export const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        setLoading(true)
        setData()
        setError();
        ApiMovieData(url).then((response) => {
            setLoading(false)
            setData(response)
        }).catch((error) => {
            setLoading(false)
            setError(error)
        })
    }, [url]);
    return { data, loading, error }
}
