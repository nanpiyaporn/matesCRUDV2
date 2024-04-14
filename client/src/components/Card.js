import React from 'react'


const Card =({crewmate}) => {
    return (
        <div className = "crewmate-card">
            <p>{crewmate.id}</p>
            <h2>{crewmate.name}</h2>
            <h4>{crewmate.title}</h4>
            <p>{crewmate.color}</p>
            <div className = "rating"> {crewmate.rating}</div>
        </div>
    )
}
export default Card