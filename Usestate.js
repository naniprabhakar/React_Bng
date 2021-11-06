import React,{useState} from 'react'

 const Usestate = () => {
   const [name,setName] = useState("Hi My Name is Prabhakar");
 return (
    <div>
      <center>
        <h1>{name}</h1>
         <button onClick={ () => setName("Suresh Here")}>Click On</button>
      </center>
    </div>
  )
}


export default Usestate
