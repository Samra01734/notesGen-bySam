import { Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { useEffect } from "react"
import getCurrentUser from "./services/api"
import { useDispatch, useSelector } from "react-redux"
export const serverUrl="http://localhost:8000"




function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    getCurrentUser (dispatch)
  },[dispatch])

  const { userData } = useSelector((state) => state.user);

console.log(userData);

  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='auth' element={<Auth/>}/>
   </Routes>
   
   </>
  )
}

export default App