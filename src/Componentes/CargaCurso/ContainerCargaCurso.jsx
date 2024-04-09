import BtnCargaCurso from "./BtnCargaCurso";
import ContainerForms from "./CompForms/ContainerForms";
import HeaderCargaCurso from "./HeaderCargaCurso"
import TituloCargaCurso from "./TituloCargaCurso";

const ContainerCargaCurso = () => {
    return(
        <>
            <HeaderCargaCurso/>
            <TituloCargaCurso/>
            <ContainerForms/>
            <BtnCargaCurso/>
        </>
    )
}

export default ContainerCargaCurso;