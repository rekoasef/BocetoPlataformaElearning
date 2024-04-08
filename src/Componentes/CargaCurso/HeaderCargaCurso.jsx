import { Link } from "react-router-dom"
import logoCrucianelli from "../../assets/descarga.png";

const HeaderCargaCurso = () => {
    return(
        <div className="container-fluid bg-danger">
            <div className="row">
                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <Link className="btn btn-secondary" to={"/"}>Volver</Link>
                </div>
                <div className="col-md-8 text-center d-flex justify-content-center align-items-center">
                    <img src={logoCrucianelli} style={{ width: '115px', height: '115px' }} />
                </div>
            </div>
        </div>
    )
}

export default HeaderCargaCurso;