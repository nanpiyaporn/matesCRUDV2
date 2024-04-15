import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../client'
import { useNavigate } from 'react-router-dom'

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [ title, setTitle ] = useState('')
  const [ name, setName ] = useState('')
  const [ color, setColor ] = useState('')
  const [ rating, setRating ] = useState('')

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase  
        .from('crewmates')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        navigate('/', {replace: true})
      }
      
      if (data) {
        setTitle(data.title)
        setName(data.name)
        setColor(data.color)
        setRating(data.rating)
        //console.log(data)
      }
    }
    fetchSmoothie()
  }, [id, navigate])

  return (
    <div className="page update">
      <form >
        <label htmlFor = "name">Name</label>
        <input 
          type = "text" 
          id = "name" 
          value = {name} onChange = {e => setName(e.target.value)} 
          />

        <label htmlFor = "title">Title</label>
        <input 
          type = "text" 
          id = "title" 
          value = {title} onChange = {e => setTitle(e.target.value)} 
          />

        <label htmlFor = "color">Color</label>
        <input 
          type = "text" 
          id = "color" 
          value = {color} onChange = {e => setColor(e.target.value)} 
          />

        <label htmlFor = "rating">Rating</label>
        <input 
          type = "number" 
          id = "rating" 
          value = {rating} onChange = {e => setRating(e.target.value)} 
          />
        <button type = "submit">Update Crewmate</button>
      </form>
    </div>
  )
}

export default Update