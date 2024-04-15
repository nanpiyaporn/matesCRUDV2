import React from 'react'
import {Link} from 'react-router-dom'
import supabase from '../client'

const Card =({crewmate, onDelete}) => {


    const handleDelete = async () => {
        const {data, error} = await supabase
            .from('crewmates')
            .delete()
            .eq('id', crewmate.id)
        if (error) {
            console.error(error)
        }
        if (data) {
            console.log(data)
            onDelete(crewmate.id)
        }
    }
    return (
        <div className = "crewmate-card">
            {/*<p>{crewmate.id}</p>*/}
            <h2>{crewmate.name}</h2>
            <h4>{crewmate.title}</h4>
            <p>{crewmate.color}</p>
            <div className = "rating"> {crewmate.rating}</div>
            <Link to = {'/'+ crewmate.id}>| edit |</Link>
            <Link to = {'/'+ crewmate.id}className ="delete" onClick = {handleDelete} >| Delete |</Link>
        </div>
    )
}
export default Card