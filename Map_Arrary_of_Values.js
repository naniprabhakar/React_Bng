import React from 'react'

 function Map_Arrary_of_Values() {
      const arr=["React Js","Node js","Express Js","Angular Js"]
 return (
    <div>
       
        {
          arr.map((value,index)=> <li>{value}</li>)
          //arr.map((value,index)=> <li key={index}>{value}</li>)
        }
      
    </div>
  )
}

export default Map_Arrary_of_Values
