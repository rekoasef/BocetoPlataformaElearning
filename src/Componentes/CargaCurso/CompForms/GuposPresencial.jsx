import { useContext, useState } from "react"
import Cupos from "./Cupos"
import { CursoContext } from "../Contexto/CursoContext"

const GruposPresencial = () => {
    const { curso } = useContext(CursoContext)
    const [grupos, setGrupos] = useState("")

    function cambioValorGrupo (event) {
        setGrupos(event.target.value)
    } 

    return(
        (curso === "3") ? (
        <div className="container">
            <div className="row">
                <label>Cantidad de Grupos</label>
                <div className="col">
                    <input type="text" value={grupos} onChange={cambioValorGrupo} className="form-control mb-3" placeholder="Ingrese la cantidad de grupos que va a haber en el curso" />
                </div>
            </div>
        </div>
        ) : null

    )
}

export default GruposPresencial;