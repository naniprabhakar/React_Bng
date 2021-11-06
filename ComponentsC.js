import React from 'react'

import { UserContext } from './UseContext'

const ComponentsC =()=> {
    return (
        <div>
            <UserContext.Consumer>
                {value => <div>{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentsC
