
import CardCurso from "./CardCurso";
import Carrousel from "./Carrousel";
import Navbar from '../Curso/Navbar'

import ContainerOnline from "./ContainerOnline";

const ContainerPagCurso = () => {
    return (
        <>
            <Navbar/>
            <Carrousel/>
            <ContainerOnline/>
            <CardCurso/>
        </>
    );
};

export default ContainerPagCurso;
