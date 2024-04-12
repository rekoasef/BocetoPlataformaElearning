import { useContext } from "react";
import { CursoContext } from "../Contexto/CursoContext";

const InicioFinCurso = () => {
    const { curso } = useContext(CursoContext)

    return(
        (curso === "2") ? (
            <div className="container mb-3 mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <label className="mb-2">Hora de inico de la clase:</label>
                        <input type="date" className="form-control"placeholder="Ingrese la hora de inicio" />
                    </div>
                    <div className="col-md-6">
                        <label className="mb-2">Hora de fin de la clase:</label>
                        <input type="date" className="form-control" placeholder="Ingrese la hora de inicio"/>
                    </div>
                </div>
            </div>
        ) : null

    )
}

export default InicioFinCurso;