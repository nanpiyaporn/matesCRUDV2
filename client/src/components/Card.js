import React from 'react'
import {Link} from 'react-router-dom'

const Card =({crewmate}) => {
    return (
        <div className = "crewmate-card">
            <p>{crewmate.id}</p>
            <h2>{crewmate.name}</h2>
            <h4>{crewmate.title}</h4>
            <p>{crewmate.color}</p>
            <div className = "rating"> {crewmate.rating}</div>
            <Link to = {'/'+ crewmate.id}>edit</Link>
        </div>
    )
}
export default Card