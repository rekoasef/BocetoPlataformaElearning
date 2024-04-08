const CompAbajo = () =>{
    return(
        <div className="container-md-12">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center">OBJETIVOS</h2>
                    <ul>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas cupiditate animi ut nihil optio rerum voluptatibus doloremque</li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas cupiditate </li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas cupiditate animi ut nihil optio rerum </li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas </li>
                    </ul>
                </div>
                <div className="col-md-6 my-4 d-flex justify-content-center align-items-center">
                    <ul className="text-center" style={{listStyle: "none"}}>
                        <li className="mb-2">Modalidad: Online</li>
                        <li className="mb-2">Cupos disponibles: 25</li>
                        <li className="mb-2">Duración: 10 Horas</li>
                        <li className="mb-2">Dia de cursado: Lunes y Miercoles</li>
                        <li className="mb-2">Hora de cursado: 10am</li>
                        <li className="mb-2">Costo: Gratis</li>
                        <button className="btn btn-danger my-4">Inscribirse</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompAbajo;