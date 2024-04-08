import { useContext, useState } from "react";
import { CursoContext } from '../Contexto/CursoContext';

const Cupos = () => {
    const { curso } = useContext(CursoContext);
    const [cupos, setCupos] = useState("");

    const cambioCupos = (event) => {
        setCupos(event.target.value);
    };

    return (
        (curso === "2" || curso === "3") ? (
            <div className="container">
                <div className="row">
                    <label className="mb-2">Se requieren cupos en este curso?</label>
                    <div className="col-md-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mr-5" type="radio" id="inlineRadio1" name="inlineRadioOptions" value="Si" onChange={cambioCupos} style={{ border: "1px solid black" }} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Si</label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineRadio2" name="inlineRadioOptions" value="No" onChange={cambioCupos} style={{ border: "1px solid black" }} />
                            <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                        </div>
                    </div>
                </div>
                {(cupos === "Si") ? (
                    <div className="row">
                        <label className="mt-3 mb-1">Ingrese la cantidad de cupos necesarios</label>
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
