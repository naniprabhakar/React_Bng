import React,{useState} from 'react'      //  useState() 

const Validation = () => {
  const [data,setData] = useState({
      username:" ",
      email:" ",
      password:"",
      confirmPassword:''
  })
const {username,email,password,confirmPassword} = data;       //  Object Destructuring
const changeHandler = e => {
  setData({...data,[e.target.name]: e.target.value});
}
const submitHandler = e => {
  e.preventDefault();
  if(username.length <=5){
    alert("username must be at least 5 Charecter");
  } else if (password !== confirmPassword){
    alert("Password is not matching");
  }else{
    console.log(data);
  }
  
}

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>      {/*   onClick  ,onChange ,onSubmit */}
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

export default Validation
