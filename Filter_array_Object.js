import React from 'react'

 function Filter_array_Object() {
     const names = ["Prabha","Suresh","Nani","Ravi","Prabhu","Suri","Ramu"];
     const filtered = names.filter(name => name.includes("P")); 
 return (
    <div>
       {
         filtered.map(item => <li>{item }</li>)
       }
    </div>
  )
}

export default Filter_array_Object
