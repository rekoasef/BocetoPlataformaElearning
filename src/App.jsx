import './App.css'
import ContainerPagCurso from './Componentes/Curso/ContainerPagCurso'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ContainerDetalles from './Componentes/Detalle/ContainerDetalles';
import Footer from './Componentes/Footer/Footer';
import ContainerCargaCurso from './Componentes/CargaCurso/ContainerCargaCurso';
import { CursoProvider } from './Componentes/CargaCurso/Contexto/CursoContext';

function App() {

  return (
    <>
      <CursoProvider>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<ContainerPagCurso/>}/>
            <Route path={'/detalles/orizon'} element={<ContainerDetalles/>}/>
            <Route path={'/CargarCurso'} element={<ContainerCargaCurso/>}/>
          </Routes>  
        </BrowserRouter>
        <Footer/>
      </CursoProvider>
    </>
  )
}

export default App
