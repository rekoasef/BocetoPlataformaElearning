import CompAbajo from "./CompAbajo";
import CompArriba from "./CompArriba";
import NavDetalles from "./NavDetalles"

const ContainerDetalles = () =>{
    return(
        <>
            <NavDetalles/>
            <CompArriba/>
            <CompAbajo/>
        </>
    )
}

export default ContainerDetalles;