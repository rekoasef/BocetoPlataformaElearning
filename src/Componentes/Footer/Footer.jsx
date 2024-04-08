import logoCrucianelli from "../../assets/LogoCrucianelli.png"

const Footer = () =>{
    return(
        <div className="container-fluid bg-danger">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={logoCrucianelli} style={{ width: '250px', height: '100px' }} />
                </div>
            </div>
        </div>
    )
}

export default Footer;