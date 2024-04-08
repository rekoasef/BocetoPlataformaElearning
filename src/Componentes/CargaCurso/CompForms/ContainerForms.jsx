import ContainerTipoCursos from "./ContainerTipoCursos"
import Dirigido from "./Dirigido"
import NombreCurso from "./NombreCurso"

const ContainerForms = () => {
    return(
        <>
            <NombreCurso/>
            <Dirigido Opc1={"Tecnico Mecanico"} Opc2={"responsable de Posventa"} Opc3={"gestión de garantías"}/>
            <ContainerTipoCursos/>

            
        </>
    )
}

export default ContainerForms