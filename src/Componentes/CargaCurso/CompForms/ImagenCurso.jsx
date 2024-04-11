import { useContext, useState } from "react";
import { CursoContext } from '../Contexto/CursoContext';
import Swal from "sweetalert2";

const ImagenCurso = () => {
    const { curso } = useContext(CursoContext);  

    function addFile () {
        Swal.fire({
            title: "Imagen subida correctamente",
            icon: "success"
        })
    }
  return (
    (curso === "2" || curso === "3" || curso === "1") ? (
    <div className="container">
        <div className="row">
        <label className="mb-3 mt-3">Subir Imagen del Curso</label>
            <div className="col">
                <form>
                    <div className="mb-3">
                    <input 
                        type="file" 
                        className="form-control" 
                        id="fileInput" 
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif"
                    />
                    </div>
                </form>
                <button className="btn btn-danger mb-3" onClick={()=>addFile()}>Subir</button>
            </div>
        </div>
    </div>
    ) : null
  );
};

export default ImagenCurso;
