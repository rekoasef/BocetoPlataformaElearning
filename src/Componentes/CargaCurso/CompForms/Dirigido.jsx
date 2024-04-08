const Dirigido = ({Opc1, Opc2, Opc3}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <label for="exampleInputEmail1" class="form-label">Dirigido a:</label>
                    <select class="form-select mb-1" aria-label="Default select example">
                        <option selected>Seleccione a que personal va dirigido</option>
                        <option value="1">{Opc1}</option>
                        <option value="2">{Opc2}</option>
                        <option value="3">{Opc3}</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Dirigido;