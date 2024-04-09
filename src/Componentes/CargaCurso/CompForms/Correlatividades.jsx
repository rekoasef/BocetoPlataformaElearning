import { useContext, useState } from "react";
import { CursoContext } from '../Contexto/CursoContext';

const Correlatividades = () => {
    const { curso } = useContext(CursoContext);
    const [correlatividad, setCorrelatividad] = useState("No");
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
    const [opciones, setOpciones] = useState([]);

    const handleSeleccion = (event) => {
        const opcion = event.target.value;
        setOpcionSeleccionada(opcion);
    };

    const agregarOpcion = () => {
        setOpciones([...opciones, opcionSeleccionada]);
        setOpcionSeleccionada(""); // Reiniciar la opción seleccionada después de agregarla
    };

    const eliminarOpcion = (index) => {
        const nuevasOpciones = [...opciones];
        nuevasOpciones.splice(index, 1);
        setOpciones(nuevasOpciones);
    };

    return (
        (curso === "2" || curso === "3" || curso === "1") ? (
            <div className="container">
                <div className="row">
                    <label className="mb-2 mt-3">Este curso necesita tener correlatividad?</label>
                    <div className="col-md-4">
                        <select className="form-select mb-3" value={correlatividad} onChange={(e) => setCorrelatividad(e.target.value)}>
                            <option value="Si">Sí</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                {(correlatividad === "Si") ? (
                    <div className="row mt-3">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="opcion" className="form-label">Seleccione una opción:</label>
                                <select className="form-select" id="opcion" value={opcionSeleccionada} onChange={handleSeleccion}>
                                    <option value="">Seleccionar...</option>
                                    <option value="Mecanica I">Mecanica I</option>
                                    <option value="Hidraulica I">Hidraulica I</option>
                                    <option value="Monitor Orizon">Monitor Orizon</option>
                                    <option value="Mecanica II">Mecanica II</option>
                                </select>
                                <button className="btn btn-primary mt-3" onClick={agregarOpcion}>Agregar</button>
                            </div>
                            <div>
                                <p>Opciones seleccionadas:</p>
                                <ul>
                                    {opciones.map((opcion, index) => (
                                        <li key={index}>
                                            {opcion}
                                            <button className="btn btn-sm btn-danger ms-2 mb-2" onClick={() => eliminarOpcion(index)}>Eliminar</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        ) : null
    );
}

export default Correlatividades;
