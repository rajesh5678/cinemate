import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import {useTitle} from '../hooks/useTitle'
import { Card } from "../components/Card"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const quaryTerm = searchParams.get("q")
  const {data : movies} = useFetch(apiPath,quaryTerm)
  
  const pageTitle = useTitle(`search result for${quaryTerm} / cinemate`)
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length ===0 ?`No result for '${quaryTerm}`: `result for '${quaryTerm}'`}</p>
      </section>
      <section className="max-w-7xl ma-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) =>(
            <Card key={movie.id} movie={movie}/>
          ))} 
        </div>
      </section>
     
    </main>
  )
}


