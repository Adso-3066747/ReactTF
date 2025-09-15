import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./componentes/inicio"
const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Inicio/>}/>
    </Routes>
  </BrowserRouter>
)
export default App
