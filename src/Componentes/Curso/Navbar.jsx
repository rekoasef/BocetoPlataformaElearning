import { Link } from "react-router-dom";
import logoCrucianelli from "../../assets/descarga.png";

const Navbar = () => {
    return (
        <div className="container-fluid bg-danger">
            <div className="row">
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <h1 className="text-light fs-2">Cursos Crucianelli</h1>
                </div>
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <img src={logoCrucianelli} style={{ width: '115px', height: '115px' }} />
                </div>
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Cursos
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className="text-center">Filtrar</p>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Web</a></li>
                            <li><a className="dropdown-item" href="#">Online</a></li>
                            <li><a className="dropdown-item" href="#">Presenciales</a></li>
                            <li><a className="dropdown-item" href="#">Todos</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to={"/CargarCurso"}>Cargar Curso</Link></li>
                        </ul>
                    </div>
                    <div className="col text-light text-center d-flex justify-content-center align-items-center">
                        <p>Logo Perfil</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
