import { useContext, useState } from "react";
import { CursoContext } from '../Contexto/CursoContext';

const Costo = () => {
    const { curso } = useContext(CursoContext);
    const [costo, setCosto] = useState("");

    const cambioCostos = (event) => {
        const newValue = event.target.checked ? event.target.value : "";
        setCosto(newValue);
    };

    return (
        (curso === "2" || curso === "3" || curso === "1") ? (
            <div className="container">
                <div className="row">
                    <label className="mb-2">Este curso va a ser pago?</label>
                    <div className="col-md-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mr-5" type="checkbox" id="inlineCheckbox1" value="Si" onChange={cambioCostos} checked={costo === "Si"} style={{ border: "1px solid black" }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Si</label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="No" onChange={cambioCostos} checked={costo === "No"} style={{ border: "1px solid black" }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">No</label>
                        </div>
                    </div>
                </div>
                {(costo === "Si") ? (
                    <div className="row">
                        <label className="mt-3 mb-1">Ingrese el costo del curso</label>
                        <div className="col">
                            <input className="mb-3 text-center" type="number" placeholder="Costo del curso"/>
                        </div>
                    </div>
                ) : null}
            </div>
        ) : null
    );
}

export default Costo;
