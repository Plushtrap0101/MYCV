import React from "react";
import "./main.css"

function Main(){
    return (
        <div className="main">
            <h2>Habilidades</h2>
            <div className="cvMain">
                <ul className="ListaHabilidades">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>NODEJS</li>
                </ul>
            </div> 
            <h2>Formacion Academica </h2>
            <div className="cvMain"> 
                <p>Bachiller Academica. I.E Las villas</p>
            </div>
            <h2>Experiencia laboral</h2>
            <div className="cvMain"> 
                <p><strong> Mesero</strong>Agente call center</p>
            </div>
            <h2>Formacion laboral</h2>
            <div className="cvMain"> 
            </div>
        </div>
        
    ) 

}
export default Main;