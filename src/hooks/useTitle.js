import { useEffect } from "react"
export const useTitle = (title) => {
     useEffect(() =>{
          document.title = `${title} / cinemate`
        })
  return null
}


// import { useEffect } from "react";

// export const useTitle = (title) => {

//     useEffect(() => { 
//         document.title = `${title} / Cinemate`;
//     });

//   return null;
// }

