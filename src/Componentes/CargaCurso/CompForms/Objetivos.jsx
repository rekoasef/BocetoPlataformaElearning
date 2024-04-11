import { useContext, useState } from "react"
import { CursoContext } from "../Contexto/CursoContext"

const Objetivos = () =>{
    const { curso } = useContext(CursoContext)
    const [opciones, setOpciones] = useState([]);
    const [inputValue, setInputValue] = useState(""); // Nuevo estado para el valor del input

    const agregarOpcion = () => {
        setOpciones([...opciones, inputValue]); // Usar el valor del input
        setInputValue(""); // Reiniciar el valor del input después de agregarlo
    };

    const eliminarOpcion = (index) => {
        const nuevasOpciones = [...opciones];
        nuevasOpciones.splice(index, 1);
        setOpciones(nuevasOpciones);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Actualizar el valor del input
    };

    return(
        (curso === "1" || curso === "2" || curso === "3") ? (
            <div className="container">
                <div className="row">
                    <label className="mb-3 mt-3">Objetivos</label>
                    <div className="col">
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control"  
                                value={inputValue} // Asignar el valor del input
                                onChange={handleInputChange} // Manejar cambios en el input
                            />
                        </div>
                    </div>
                    <button className="btn btn-danger mb-2" onClick={agregarOpcion}>Agregar</button>
                </div>
                <div className="row">
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
        ): null

    )
}

export default Objetivos;
