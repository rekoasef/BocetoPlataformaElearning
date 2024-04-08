import Costo from "./Costo";
import Cupos from "./Cupos";
import DiasCursado from "./DiasCursado";
import TipoCurso from "./TipoCurso";

const ContainerTipoCursos = () => {
    return(
        <>
            <TipoCurso/>
            <DiasCursado/>
            <Cupos/>
            <Costo/>
        </>
    )
}

export default ContainerTipoCursos;