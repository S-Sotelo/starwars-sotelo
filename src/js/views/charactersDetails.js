import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detalles = (props) => {
    const [datos, setDatos] = useState([]);
    const [ver, setVer] = useState("1");
    const param = useParams();

    useEffect(() => {
        if (ver === "1") {
            setVer("2");
            let request = {
                method: "GET",
                redirect: "follow"
            };
            fetch(`https://swapi.tech/api/people/${param.idDetalles}`, request)
                .then((resp) => resp.json())
                .then((result) => { setDatos(result.result.properties); })
                .catch(error => {
                    console.log(error, "este es el error");
                });
        }
    }, [ver, param.idDetalles]);

    return (
        <>
            <div className="card mb-3 bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${param.idDetalles}.jpg`} style={{ width: '300px' }} className="img-fluid rounded-start" alt={datos.name || "Character Image"} />
                    </div>
                    <div className="col-md-8 text-center">
                        <div className="card-body">
                            <h5 className="card-title fs-1">{datos.name}</h5>
                            <p className="card-text">
                                {datos.name} es un personaje del universo Star Wars. Nacido en el año {datos.birth_year}, es conocido por sus características físicas distintivas como su color de ojos ({datos.eye_color}), color de cabello ({datos.hair_color}), y color de piel ({datos.skin_color}). Con una estatura de {datos.height} cm, este personaje juega un papel crucial en la narrativa de la saga. Su historia y sus aventuras contribuyen significativamente al rico tapiz del universo Star Wars.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger mt-5">
            </div>

            <div className="container mt-5 text-danger text-center">
                <div className="row g-0">
                    <div className="col-md-2">
                        <strong>Name</strong>
                        <p>{datos.name}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Birth Year</strong>
                        <p>{datos.birth_year}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Eye Color</strong>
                        <p>{datos.eye_color}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Hair Color</strong>
                        <p>{datos.hair_color}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Skin Color</strong>
                        <p>{datos.skin_color}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Height</strong>
                        <p>{datos.height}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalles;
