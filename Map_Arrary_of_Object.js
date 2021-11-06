import React from 'react'

 function Map_Arrary_of_Object() {
      const arr = [
          {
            id:1,
            title:"React Js"
          },
          {
            id: 2,
            title : "Node js"
          },
          {
            id : 3,
            title : "Angular Js"
          },
          {
            id:4,
            title : "Express Js"
          }
      ]
 return (
    <div>
       
        {
          arr.map((value)=> <li key={value.id}>{value.id}  {value.title}</li>)
        }
      
    </div>
  )
}


export default Map_Arrary_of_Object
