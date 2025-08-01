import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pageNotfound from '../assets/pagenotfound.png'
import { Button } from '../components/Button'


export const PageNotFound = () => {

   useEffect(() =>{
      document.title = `page not found / cinemate`
    })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 oops!</p>
          <div className="max-w-lg">
             <img src={pageNotfound} alt="page not found" className="rounded"/>
          </div>
          
        </div>
        <div className="flex justify-center my-4">
          <Link to="/"></Link>
          <Button>Back to Home </Button>
        </div>
      </section>
    </main>
  )
}
