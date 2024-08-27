import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallesPlanets = (props) => {
    const [datos, setDatos] = useState([]);
    const [ver, setVer] = useState("1");
    const param = useParams();

    useEffect(() => {
        if (ver === "1") {
            setVer("2");
            let request = {
                method: "GET",
                redirect: "follow",
            };

            fetch(`https://swapi.tech/api/planets/${param.idPlanets}`, request)
                .then((resp) => resp.json())
                .then((result) => { setDatos(result.result.properties); })
                .catch(error => {
                    console.log(error, "este es el error");
                });
        }
    }, [ver, param.idPlanets]);

    return (
        <>
            <div className="card mb-3 bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${param.idPlanets}.jpg`} style={{ width: '300px' }} className="img-fluid rounded-start" alt="NO HAY IMAGEN QUE MOSTRAR" />
                    </div>
                    <div className="col-md-8 text-center">
                        <div className="card-body">
                            <h5 className="card-title fs-1">{datos.name}</h5>
                            <p className="card-text">
                                {datos.name} es un planeta del universo de Star Wars con características únicas. Su clima varía desde desértico hasta tropical, lo que influye en la vida y la cultura de sus habitantes. La población del planeta puede ser densa o escasa, dependiendo de su ubicación y recursos. Su período orbital alrededor de su estrella y el período de rotación afectan las estaciones y el clima del planeta. El diámetro del planeta es un factor importante para su clasificación y para determinar su capacidad para soportar vida.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 pb-5 mb-5 text-danger border-bottom border-danger mt-5">
            </div>

            <div className="container mt-5 text-danger text-center">
                <div className="row g-0">
                    <div className="col-md-2">
                        <strong>Name</strong>
                        <p>{datos.name}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Climate</strong>
                        <p>{datos.climate}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Population</strong>
                        <p>{datos.population}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Orbital Period</strong>
                        <p>{datos.orbital_period}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Rotation Period</strong>
                        <p>{datos.rotation_period}</p>
                    </div>
                    <div className="col-md-2">
                        <strong>Diameter</strong>
                        <p>{datos.diameter}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetallesPlanets;
