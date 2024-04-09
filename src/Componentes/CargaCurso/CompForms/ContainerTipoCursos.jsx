import Correlatividades from "./Correlatividades";
import Costo from "./Costo";
import Cupos from "./Cupos";
import DetalleCurso from "./DetalleCurso";
import DiasCursado from "./DiasCursado";
import Material from "./Material";
import TipoCurso from "./TipoCurso";

const ContainerTipoCursos = () => {
    return(
        <>
            <TipoCurso/>
            <DiasCursado/>
            <Cupos/>
            <Costo/>
            <Correlatividades/>
            <Material/>
            <DetalleCurso/>
        </>
    )
}

export default ContainerTipoCursos;