import supabase from "../client"
import { useEffect, useState } from "react"

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("data")
          .select("*")

        if (error) {
          setFetchError(error.message)
          setData(null)
          console.error("error", error)
          return
        }
        setData(data)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      }
    }
    fetchData()

  }, [])


  return (
    <div className="page home">
      {fetchError && <p className="fetch-error">{fetchError}</p>}
      {data && (
        <div className="crewmetes">
          {data.map((crewmate) => (
            <div key={crewmate.id} className="crewmate">
              <h2>{crewmate.name}</h2>
              <h2>{crewmate.title}</h2>
              <p>{crewmate.rating}</p>
              <p>{crewmate.color}</p>
            </div>
          ))}
        </div>

      )}
    </div>
  )
}

export default Home