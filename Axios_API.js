import React, { useEffect , useState} from 'react'

import axios from 'axios';

const Axios_API = () => {
    const [data,setData] = useState([]);
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(response => setData(response.data))
    },[]);
    
        return (
            <div>
                {data.map(item => <li key={item.id}>{item.title}</li>)}
                {/* 
                {data.map(item => <li key={item.id}>{item.userId}</li>)} 
                {data.map(item => <li key={item.id}>{item.title}</li>)}
                {data.map(item => <li key={item.id}>{item.id}</li>)}
                */}
            </div>
        )
}

export default Axios_API
