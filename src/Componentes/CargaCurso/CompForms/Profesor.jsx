import { useContext } from "react";
import { CursoContext } from "../Contexto/CursoContext";

const Profesor = () =>{
    const { curso } = useContext(CursoContext)
    return(
        (curso === "2") ? (
        <div className="container">
            <div className="row">
                <label className="mb-2">Nombre del profesor</label>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control mb-3"
                        placeholder="Ingrese el nombre del profesor"  

                    />
                </div>
            </div>
        </div>
        ): null
    )
}

export default Profesor;