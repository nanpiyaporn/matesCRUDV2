const Create = () => {

  const [ title, setTitle ] = useState('')
  const [ name, setName ] = useState('')
  const [ color, setColor ] = useState('')
  const [ rating, setRating ] = useState('')
  const [ formError, setError ] = useState(null)


  return (
    <div className="page create">
      <form onSubmit ={handleSubmit}>
        <label htmlFor = "name">Name</label>
        <input 
          type = "text" 
          id = "name" value = {name} onChange = {e => setName(e.target.value)} 
          />

        <label htmlFor = "title">Title</label>
        <input 
          type = "text" 
          id = "title" value = {title} onChange = {e => setTitle(e.target.value)} 
          />

        <label htmlFor = "color">Color</label>
        <input 
          type = "text" 
          id = "color" value = {color} onChange = {e => setColor(e.target.value)} 
          />

        <label htmlFor = "rating">Rating</label>
        <input 
          type = "number" 
          id = "rating" value = {rating} onChange = {e => setRating(e.target.value)} 
          />
        <button type = "submit">Create</button>
        
      </form>
    </div>
  )
}

export default Create