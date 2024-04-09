import Swal from "sweetalert2";

const BtnCargaCurso = () => {

    function finalizado () {
        Swal.fire({
            title: "El curso se cargo correctamente!",
            text: "Verifique si todo esta correcto!",
            icon: "success",
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-danger mb-4" onClick={()=>finalizado()}>Subir Curso</button>
                </div>
            </div>
        </div>
    )
}

export default BtnCargaCurso;