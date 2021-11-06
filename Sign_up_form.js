import React,{useState} from 'react'      //  useState() 
const Sign_up_form = () => {
  const [data,setData] = useState({
      username:" ",
      email:" ",
      password:"",
      confirmPassword:''
  })
const {username,email,password,confirmPassword} = data; //  Object Destructuring
const changeHandler = e => {
  setData({...data,[e.target.name]: e.target.value});
}
const submitHandler = e => {
  e.preventDefault();
  if(password === confirmPassword){
    console.log(data);
  }else{
    console.log("Password Are Not Matching");
   }  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}> {/*   onClick  ,onChange ,onSubmit */}
          <h1>React Froms</h1>  
          <label for="username">User Name</label> <span>*</span>
          <input type="text" name="username" placeholder="UserName" value={username} onChange={changeHandler} /><br/><br/>
          <label for="email">Email</label>     <span>*</span>
          <input type="email" name="email" placeholder="Email" value={email} onChange={changeHandler} /><br/><br/>
          <label for="password">Password</label> <span>*</span>
          <input type="password" name="password" placeholder="password" 
        value={password} onChange={changeHandler} /><br/><br/>
          <label for="password">Confirm PassWord</label>     <span>*</span>
          <input type="password" name="confirmPassword" placeholder="Confirm PassWord" value={confirmPassword} onChange={changeHandler} /><br/><br/>
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>  ) }

export default Sign_up_form
