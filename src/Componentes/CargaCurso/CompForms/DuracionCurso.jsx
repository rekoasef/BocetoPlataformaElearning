import { useContext } from "react";
import { CursoContext } from "../Contexto/CursoContext";

const DuracionCurso = () =>{
    const { curso } = useContext(CursoContext)
    return(
        (curso === "2" || curso === "3") ? (
        <div className="container">
            <div className="row">
                <label className="mb-3">Duración Curso (Expresar en Horas)</label>
                <div className="col">
                    <input 
                        type="number" 
                        className="form-control mb-3"
                        placeholder="Ingrese la duracion total del curso en minutos"
                    />
                </div>
            </div>
        </div>
        ): null
    )
}

export default DuracionCurso;