import supabase from "../client"
import { useEffect, useState } from "react"
import Card from "../components/Card"

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [crewmates,setCrewmates] = useState(null)
  
  
  const handleDelete = async (id) => {
    setCrewmates(prevCrewmates =>  { 
      return prevCrewmates.filter(crewmate => crewmate.id !== id)
    }
  )
  }

  useEffect(() => {
    const fetcCrewmates = async () => {
        const {data, error } = await supabase
          .from('crewmates')
          .select()

        if (error) {
          setFetchError('Could not fetch crewmates')
          setCrewmates(null)
          console.error(error)
          
        }
        if(data){
          setCrewmates(data)
          console.log(data)
          setFetchError(null)
        }
      }
      fetcCrewmates()
  }, [])


  return (
    <div className="page home">
      {fetchError && <p className="fetch-error">{fetchError}</p>}
      {crewmates && (
        <div className="crewmates">

          <div className="crewmate-grid">
            {crewmates.map(crewmate => (
              <Card key ={crewmate.id}crewmate={crewmate} 
              onDete = {handleDelete} />
          ))}
        </div>
      </div>
      )}
    </div>
  )
}

export default Home