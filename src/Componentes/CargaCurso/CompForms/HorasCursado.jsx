const HorasCursado = () =>{
    return(
        <div className="container mb-3 mt-3">
            <div className="row">
                <div className="col-md-6">
                    <label className="mb-2">Hora de inico del curso:</label>
                    <input type="text" className="form-control"placeholder="Ingrese la hora de inicio" />
                </div>
                <div className="col-md-6">
                    <label className="mb-2">Hora de fin del curso:</label>
                    <input type="text" className="form-control" placeholder="Ingrese la hora de inicio"/>
                </div>
            </div>
        </div>
    )
}

export default HorasCursado;