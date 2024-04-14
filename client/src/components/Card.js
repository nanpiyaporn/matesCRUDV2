import React from 'react'


const Card =({crewmates}) => {
    return (
        <div className = "crewmate-card">
            <p>{crewmates.id}</p>
            <h2>{crewmates.name}</h2>
            <h2>{crewmates.title}</h2>
            <p>{crewmates.color}</p>
            <div className = "rating"> {crewmates.rating}</div>
        </div>
    )
}
export default Card