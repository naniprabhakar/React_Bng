import React from 'react'

 function Filter_array_Values() {

    const arr = [10,20,30,40,50,60,70,80,90];
     const filtered = arr.filter(item => item>40); 
 return (
    <div>
       {
         filtered.map(item => <li>{item }</li>)
       }
    </div>
  )
}


export default Filter_array_Values
