import React, { useContext } from "react";
import { CursoContext } from '../Contexto/CursoContext';
import DiasCursado from "./DiasCursado";

const FechaCurso = () => {
    const { curso } = useContext(CursoContext);

    return (
        <>
            (curso === "2") ? (
                <div className="container mb-4">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label>Fecha de inicio del curso:</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label>Fecha de Fin del curso:</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                </div>
            ) : null
            <DiasCursado/>
        </>
    );
}

export default FechaCurso;
