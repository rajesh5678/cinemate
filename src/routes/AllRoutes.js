import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
      <>
          <Routes>
              <Route path="" element={<MovieList />} />
              <Route path="movie/:id" element={<MovieDetails />} />
              <Route path="movies/popular" element={<MovieList />} />
              <Route path="movies/top" element={<MovieList />} />
              <Route path="movies/upcoming" element={<MovieList />} />
              <Route path="movies/search" element={<MovieList />} />
              <Route path ="*" element ={<PageNotFound />} />
        </Routes>
      </>
  )
}
