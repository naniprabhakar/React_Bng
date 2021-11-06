import React from 'react'

const Path_query_Parameters = ({match})=> {
    return (
        <div>
            <center>
            <h4>Path_Query_Parameters name is : {match.params.name}</h4>
            </center>
        </div>
    )
}


export default Path_query_Parameters
