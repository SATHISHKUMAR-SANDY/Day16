import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function useFetch(url){
    const [product, setProduct] = useState([]);
    const [err, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(()=>{

let fetchApi = async()=>{
    try{
        let responce = await axios.get(url)
            setProduct(responce.data)
        }

    catch (error) {
        setError(error.message)

    }
    finally{
        setLoading(false)
    }
}
fetchApi ()
    },[])

return {product,err,loading,setProduct}
}
export default useFetch