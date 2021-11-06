// import React,{useState} from 'react'

//  function UseEffect() {
//    const [count,setCount] = useState(0);
//  return (
//     <div>
//       <center> 
//         <h1> You Clicked {count} Times</h1>
//          <button onClick={ () => setCount(count + 1)}>Click On</button>
//       </center>
//     </div>
//   )
// }

//(OR)                                 // (OR)

// import React,{useState, useEffect} from 'react'

//  function UseEffect() {
//    const [count,setCount] = useState(0);
//    useEffect( () => console.log("CLICKED"),[count]);
//  return (
//     <div>
//       <center> 
//         <h1> You Clicked {count} Times</h1>
//          <button onClick={ () => setCount(count + 1)}>Click On</button>
//       </center>
//     </div>
//   )
// }


    //                        //(OR)
   import React,{useState, useEffect} from 'react'

 function UseEffect() {
   const [count,setCount] = useState(0);
   useEffect( () => console.log(count),[count]);
 return (
    <div>
      <center> 
        <h1> You Clicked {count} Times</h1>
         <button onClick={ () => setCount(count + 1)}>Click On</button>
      </center>
    </div>
  )
}
                         

export default UseEffect
