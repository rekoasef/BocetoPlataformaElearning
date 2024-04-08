import { useContext } from "react";
import { CursoContext } from '../Contexto/CursoContext';
import HorasCursado from "./HorasCursado";

const DiasCursado = () => {
    const { curso } = useContext(CursoContext);

    return (
            (curso === "2") ? (
                <div className="container">
                    <div className="row mb-3">
                        <label className="mt-3">Dias de cursado:</label>
                        <div className="col-md-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{ border: "1px solid black" }} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Lunes</label>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{ border: "1px solid black" }} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Martes</label>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{ border: "1px solid black" }} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Miercoles</label>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{ border: "1px solid black" }} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Jueves</label>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{ border: "1px solid black" }} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Viernes</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <HorasCursado/>
                    </div>
                </div>
            ) : null
     );
}

export default DiasCursado;
