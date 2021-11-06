import React from 'react'
import ComponentsC from './ComponentsC'

export const UserContext = React.createContext();

const UseContext = () => {
    return (
        <div>
            <center>
                <UserContext.Provider value={"Suresh"}>
                    <ComponentsC />
                </UserContext.Provider>
            </center>
        </div>
    )
}

export default UseContext
