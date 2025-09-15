import { Link } from "react-router-dom"
import { VscBookmark } from "react-icons/vsc"
import { IoAccessibility } from "react-icons/io5"
import './styles/nav.css'
const Nav=()=>(
    <div className="aling">
        <Link><p className="text"><VscBookmark />Inicio</p></Link>
        <Link><p className="text"><IoAccessibility />Ropa</p></Link>
        <Link><p className="text">Accesorio</p></Link>
        <Link><p className="text">Carrito</p></Link>
        <Link><p className="text">Ubicacion</p></Link>
        <Link><p className="text">Pedido</p></Link>
        <Link><p className="text">Registro/Inicio</p></Link>
    </div>
)
export default Nav