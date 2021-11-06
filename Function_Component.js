// import React from 'react'

// export const Function_Component = () => {
//   return (
//     <div>
//       <h1>Prabhakar</h1>
//     </div>
//   )
// }

import React,{useState} from 'react'

export const Function_Component = () => {
  const [name,setName] = useState("My Name is Prabhakar")
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}


export default Function_Component
