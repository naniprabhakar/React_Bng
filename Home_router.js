import React, { useState } from 'react' 
import { Redirect } from 'react-router';
import {useHistory} from 'react-router-dom';

const Home_router = () => {
    let history = useHistory();
    const [auth,setAuth] = useState(false);
    if(auth){
        return <Redirect to='/Dashboard_router'></Redirect>
    }
    return (
        <div>
            <center>
            <p>You're offline. Check your connection.</p>
            <button onClick={()=>setAuth(true)}> Login</button>
            <button onClick={ ()=>history.push('/About_router')}>Submit</button>
            </center>
        </div>
    )
}

export default Home_router
