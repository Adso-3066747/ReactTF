import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./componentes/inicio"
import Fregistro from "./Pages/Fregistro"
const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Inicio/>}/>
      <Route exact path="/R_I" element={<Fregistro/>}/>
    </Routes>
  </BrowserRouter>
)
export default App
