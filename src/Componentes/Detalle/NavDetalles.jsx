import { Link } from "react-router-dom"
import logoCrucianelli from "../../assets/descarga.png";

const NavDetalles = () =>{
    return(
        <div className="container-fluid bg-danger">
            <div className="row">
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <Link className="btn btn-secondary" to={"/"}>Volver</Link>
                </div>
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <img src={logoCrucianelli} style={{ width: '115px', height: '115px' }} />
                </div>
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <p className="mr-3 text-light">Logo Info</p>
                    <p>------------</p>
                    <p className="ml-3 text-light">Logo Perfil</p>
                </div>
            </div>
        </div>
    )
}

export default NavDetalles;