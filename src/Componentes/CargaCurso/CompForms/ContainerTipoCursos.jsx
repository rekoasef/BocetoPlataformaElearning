import Correlatividades from "./Correlatividades";
import Costo from "./Costo";
import Cupos from "./Cupos";
import DetalleCurso from "./DetalleCurso";
import DiasCursado from "./DiasCursado";
import DuracionCurso from "./DuracionCurso";
import GruposPresencial from "./GuposPresencial";
import ImagenCurso from "./ImagenCurso";
import Material from "./Material";
import Objetivos from "./Objetivos";
import Profesor from "./Profesor";
import TipoCurso from "./TipoCurso";

const ContainerTipoCursos = () => {
    return(
        <>
            <TipoCurso/>
            <DiasCursado/>
            <GruposPresencial/>
            <Cupos/>
            <Costo/>
            <Correlatividades/>
            <Material/>
            <DetalleCurso/>
            <Objetivos/>
            <ImagenCurso/>
            <Profesor/>
            <DuracionCurso/>
        </>
    )
}

export default ContainerTipoCursos;