
import { createClient } from '@supabase/supabase-js'



const supabaseUrl = "https://zztckcckxbczjnjebicw.supabase.co"
//process.env.REACT_APP_SUPABASE_URL


//const supabaseKey = import.meta.env.REACT_APP_SUPABASE_ANON_KEY
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;