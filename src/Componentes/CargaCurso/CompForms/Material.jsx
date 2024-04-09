import { useContext, useState } from "react";
import { CursoContext } from '../Contexto/CursoContext';
import Swal from "sweetalert2";

const Material = () => {
    const { curso } = useContext(CursoContext);  

    function addFile () {
        Swal.fire({
            title: "Material subido correctamente",
            text: "Verifique si todo esta correcto!",
            icon: "success"
        })
    }
  return (
    (curso === "2" || curso === "3" || curso === "1") ? (
    <div className="container">
        <div className="row">
        <label>Subir Material</label>
            <div className="col">
                <form>
                    <div className="mb-1">
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

export default Material;
