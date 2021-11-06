import React, { useState } from 'react'
import axios from 'axios';

const Firebase_Realtime = () => {
    const [data,setData] = useState({
        username:" ",
        email:" ",
        password:"",
        confirmPassword:""
    })
    const {username,email,password,confirmPassword}= data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = e =>{
        e.preventDefault();
      axios.post("https://react-48b59-default-rtdb.firebaseio.com/register.json",data).then(( )=> alert("Submitted Suecceessfull"));
    }
        return (
            <div>
                <center>
                    <form onSubmit={submitHandler}>
                    <h1>React Froms</h1>  
          <label for="username">User Name</label> <span>*</span>
          <input type="text" name="username" placeholder="UserName" value={username} onChange={changeHandler} /><br/><br/>
          <label for="email">Email</label>     <span>*</span>
          <input type="email" name="email" placeholder="Email" value={email} onChange={changeHandler} /><br/><br/>
          <label for="password">Password</label> <span>*</span>
          <input type="password" name="password" placeholder="password" value={password} onChange={changeHandler} /><br/><br/>
          <label for="password">Confirm PassWord</label>     <span>*</span>
          <input type="password" name="confirmPassword" placeholder="Confirm PassWord" value={confirmPassword} onChange={changeHandler} /><br/><br/>
          {password!== confirmPassword ?<p>Password Not Marching</p>:null}
          <input type="submit" name="submit" />
                    </form>
                </center>
                
            </div>
        )
}

export default Firebase_Realtime
