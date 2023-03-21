import {useState, useEffect } from 'react';



const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(()=>{
    const fetchData = async()=>{
        const resp = await fetch(url);
        const dataRet = await resp.json()

        setData(dataRet)



    }

    fetchData()
  }, [url])

  return {data: data}

  
}
 
export default useFetch;