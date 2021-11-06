import React from 'react'
import {Link} from 'react-router-dom';

const Navbar_router = () => {
    return (
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Dashboard_router"><li>Dashboard</li></Link>
                <Link to ="/About_router"><li>About</li></Link> 
                <Link to ="/OnSubmit"><li>OnSubmit</li></Link> 
                <Link to ="/Redux"><li>Redux</li></Link> 
                <Link to ="/Class_Component"><li>Class_Component</li></Link> 
                <Link to ="/Function_Component"><li>Function_Component</li></Link>
                <Link to ="/State"><li>State</li></Link> 
                <Link to ="/Props"><li>Props</li></Link> 
                <Link to ="/Display"><li>Display</li></Link> 
                <Link to ="/Usestate"><li>Usestate</li></Link> 
                <Link to ="/UseEffect"><li>UseEffect</li></Link> 
                <Link to ="/Filter_array_Object"><li>Filter_array_Object</li></Link> 
                <Link to ="/Filter_array_Values"><li>Filter_array_Values</li></Link> 
                <Link to ="/Map_Arrary_of_Values"><li>Map_Arrary_of_Values</li></Link>
                <Link to ="/Map_Arrary_of_Object"><li>Map_Arrary_of_Object</li></Link> 
                <Link to ="/OnSubmit"><li>OnSubmit</li></Link> 
                <Link to ="/OnChange"><li>OnChange</li></Link> 
                <Link to ="/Header"><li>Header</li></Link> 
                <Link to ="/Login_form"><li>Login_form</li></Link> 
                <Link to ="/Validation"><li>Validation</li></Link> 
                <Link to ="/Sign_up_form"><li>Sign_up_form</li></Link> 
                <Link to ="/Firebase_Realtime"><li>Firebase_Realtime</li></Link> 
                <Link to ="/Router"><li>Router</li></Link> 
                <Link to ="/Router_new"><li>Router_new</li></Link> 
                <Link to ="/Axios_API"><li>Axios_API</li></Link> 
                <Link to ="/Calculator"><li>Calculator</li></Link> 
                <Link to ="/Fetch_API"><li>Fetch_API</li></Link> 
                <Link to ="/Footer"><li>Footer</li></Link> 
                <Link to ="/Path_query_parameters"><li>Path_query_parameters</li></Link> 
                <Link to ="/UseContext"><li>UseContext</li></Link> 
                <Link to ="/Image"><li>Image</li></Link> 
                <Link to ="/Audio"><li>Audio</li></Link> 
                <Link to ="/Video"><li>Video</li></Link> 
            </ul>
        </div>
    )
}

export default Navbar_router
