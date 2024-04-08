import React, { createContext, useContext, useState } from "react";

export const CursoContext = createContext();


export const CursoProvider = ({ children }) => {
    const [curso, setCurso] = useState("");

    return (
        <CursoContext.Provider value={{ curso, setCurso }}>
            {children}
        </CursoContext.Provider>
    );
}

export const useCurso = () => useContext(CursoContext);
