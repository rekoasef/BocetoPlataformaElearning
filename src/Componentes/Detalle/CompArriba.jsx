import orizon from "../../assets/Orizon.png"
import DetalleCurso from "./DetalleCurso"

const EstiloImagen = () =>{
    const estiloImagen = {
        width: "550px",
        height: "400px",
        borderRadius: "20px",
        margin: "20px"
    }
    return(
        <img src={orizon} style={estiloImagen} />
    )
}

const CompArriba = () =>{
    return(
        <>
            <div className="container-md-1">
                <div className="row">
                    <div className="col">
                        <EstiloImagen/>
                    </div>
                    <div className="col">
                        <DetalleCurso/>
                    </div>
                </div>
            </div>
            <div class="my-2 border-bottom border-danger"></div>
        </>
    )
}

export default CompArriba;