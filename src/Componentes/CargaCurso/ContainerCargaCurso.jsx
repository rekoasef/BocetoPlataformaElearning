import ContainerForms from "./CompForms/ContainerForms";
import HeaderCargaCurso from "./HeaderCargaCurso"
import TituloCargaCurso from "./TituloCargaCurso";

const ContainerCargaCurso = () => {
    return(
        <>
            <HeaderCargaCurso/>
            <TituloCargaCurso/>
            <ContainerForms/>
        </>
    )
}

export default ContainerCargaCurso;