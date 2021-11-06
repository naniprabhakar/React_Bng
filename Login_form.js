import React,{useState} from 'react'      //  useState() 

const Login_form = () => {
  const [data,setData] = useState({
      username:" ",
      password:""
  })
const {username,password} = data;       //  Object Destructuring
const changeHandler = e => {
  setData({...data,[e.target.name]: [e.target.value]});
}
const submitHandler = e => {
  e.preventDefault();
  console.log(data);
}
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>  {/*   onClick  ,onChange ,onSubmit */}
          <h1>React Froms</h1>  
          <label for="username">User Name</label> <span>*</span>
          <input type="text" name="username" placeholder="UserName" 
                value={username} onChange={changeHandler} /><br/><br/>
          <label for="password">PassWord</label>     <span>*</span>
          <input type="password" name="password" placeholder="PassWord" 
                  value={password} onChange={changeHandler} /><br/><br/>
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}



export default Login_form
