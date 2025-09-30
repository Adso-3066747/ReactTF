
export default function Registro({handleSubmit,setNombre,setTelefono,setCorreo}){
    return(
        <div>
            <h1> Formulario de Registro</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='Nom'>Nombre</label>
                    <input type="text" name="Nom" id="" onChange={(e)=>setNombre(e.target.value)} />
                    <label htmlFor='Tel'>Telefono</label>
                    <input type="text" name="Tel" id="" onChange={(e)=>setTelefono(e.target.value)}/>
                    <label htmlFor='Cor'>Correo</label>
                    <input type="email" name="Cor" id="" onChange={(e)=>setCorreo(e.target.value)}/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}