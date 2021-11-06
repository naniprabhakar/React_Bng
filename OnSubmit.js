import React,{useState} from 'react'

 function OnSubmit() {
   const [data,setData] = useState({
      user:' ',
      password :'',
   })
   const {user,password}=data;
   const onChange = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
   }
   const submitHandler = e => {
     e.preventDefault();
     //axios.post('URL Iyali ',data);
     console.log(data);
   }
 return (
    <div>
      <center> 
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="Username" value={user} name="user" onChange={onChange} /> <br/>
        <input type="password" placeholder="password" name="password" value={ password } onChange={onChange} /><br/>
        <input type="submit" name="Submit" />
        <br></br>
        {/* <h1> You Clicked {count} Times</h1>
         <button onClick={ () => setCount(count + 1)}>Click On</button> */}
         </form>
      </center>
    </div>
  )
}

export default OnSubmit
