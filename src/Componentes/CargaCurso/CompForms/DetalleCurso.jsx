import { useContext, useState } from "react";
import { CursoContext } from '../Contexto/CursoContext';

const DetalleCurso = () => {
    const { curso } = useContext(CursoContext);

    return(
        (curso === "2" || curso === "3" || curso === "1") ? (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="form-floating">
                        <textarea class="form-control mb-3" style={{ border: "1px solid black" ,height: "100px" }} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2" >Detalle del curso</label>
                    </div>
                </div>
            </div>
        </div>
        ) : null
    )
}

export default DetalleCurso;