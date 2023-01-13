import React from 'react';
import "@styles/NotFound.scss";

import notFound from "@logos/not-found.svg"

const NotFound = () =>{
    return(
    <div className="container">
        <div className="image">
            <img src={notFound} alt="Not Found"/>
        </div>
        <div className="text">
            <h2>¡No encontrado!</h2>
            <p>La ruta ala que deseas ingresar no fue encontrada.</p>
        </div>
    </div>
    );
};

export default NotFound;