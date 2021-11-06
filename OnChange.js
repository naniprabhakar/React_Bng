import React,{useState} from 'react'

 const OnChange=()=> {
   const [user,setUser] = useState("");
   const handler = e =>{
    setUser(e.target.value);
   }
 return (
    <div>
      <center> 
        <h1>HI</h1>
        <input type="text" placeholder="Username" value={user} name="user" onChange={handler} />
        <br></br>{user}
              </center>
    </div>
  )
}


export default OnChange
