import { useContext, useState } from "react";
import { CursoContext } from '../Contexto/CursoContext';

const Cupos = () => {
    const { curso } = useContext(CursoContext);
    const [cupos, setCupos] = useState("");

    const cambioCupos = (event) => {
        const newValue = event.target.checked ? event.target.value : "";
        setCupos(newValue);
    };
    

    return (
        (curso === "2" || curso === "3") ? (
            <div className="container">
                <div className="row mb-3">
                    <label className="mb-2">Se requieren cupos en este curso?</label>
                    <div className="col-md-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mr-5" type="checkbox" id="inlineCheckbox1" value="Si" onChange={cambioCupos} checked={cupos === "Si"} style={{ border: "1px solid black" }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Si</label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="No" onChange={cambioCupos} checked={cupos === "No"} style={{ border: "1px solid black" }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">No</label>
                        </div>
                    </div>
                </div>
                {(cupos === "Si") ? (
                    <div className="row">
                        <label className="mb-1">Ingrese la cantidad de cupos necesarios</label>
                        <div className="col">
                            <input className="mb-3 text-center" type="number" placeholder="Cupos Necesarios"/>
                        </div>
                    </div>
                ) : null}
            </div>
        ) : null
    );
}

export default Cupos;
