import { useState } from "react"
import NavBar from "./Component/NavBar"
import NewsBoard from "./Component/NewsBoard"

function App() {
  const [category,setCategory]=useState("general");

  return (
    <>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  )
}

export default App
