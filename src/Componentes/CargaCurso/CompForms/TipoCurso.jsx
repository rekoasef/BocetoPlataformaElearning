import CursoWeb from './CursoWeb';
import { useContext } from 'react'; 
import { CursoContext } from '../Contexto/CursoContext';

const TipoCurso = () => {
    const { curso, setCurso } = useContext(CursoContext);

    const handleCursoChange = (event) => {
        setCurso(event.target.value);
    };

    return(
        <div className="container my-2">
            <div className="row">
                <div className="col">
                    <label>Tipo de curso:</label>
                    <select 
                        className="form-select" 
                        aria-label="Default select example"
                        value={curso}
                        onChange={handleCursoChange}
                    >
                        <option value="">Seleccione el tipo de curso</option>
                        <option value="1">Web</option>
                        <option value="2">Online</option>
                        <option value="3">Presencial</option>
                    </select>
                </div>
            </div>
            {curso === "2" && (
                <div className="row">
                    <div className="col">
                        <CursoWeb />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TipoCurso;