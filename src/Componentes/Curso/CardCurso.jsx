import orizon from "../../assets/Orizon.png"
import MonitorGen3 from "../../assets/MonitorGen3.jpg"
import FieldView from "../../assets/field.png"
import { Link } from "react-router-dom"

const CardCurso = () =>{
    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <div className="card border border-danger" style={{width: "18rem"}}>
                        <img src={orizon} className="card-img-top"/>
                        <div className="card-body border border-danger">
                            <h5 className="card-title">Capacitación Monitor Orizon</h5>
                            <Link className="btn btn-danger w-100 my-2" to={"/detalles/orizon"}>Detalle</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-danger" style={{width: "18rem"}}>
                        <img src={MonitorGen3} className="card-img-top"/>
                        <div className="card-body border border-danger">
                            <h5 className="card-title">Capacitación Monitor Gen 3 Precision Planting</h5>
                            <Link className="btn btn-danger w-100 my-2" to={"/detalle/gen3"}>Detalle</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-danger" style={{width: "18rem"}}>
                        <img src={FieldView} className="card-img-top"/>
                        <div className="card-body border border-danger">
                            <h5 className="card-title">Capacitación Fieldview</h5>
                            <Link className="btn btn-danger w-100 my-2" to={"/detalle/Fieldview"}>Detalle</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCurso;