import { useState,useEffect } from "react"

 export const useFetch = (apiPath, queryTerm="") => {
  const [data,setData] = useState([])
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

// console.log(process.env.REACT_APP_API_KEY)

// console.log(url)
  useEffect (() =>{
    async function moviefetch(){
      const response = await fetch(url)
        const json = await response.json();
        setData(json.results)
    }
     moviefetch()
  },[url])
  
  return {data}
}


