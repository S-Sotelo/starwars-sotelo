import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Card = ({ addFav }) => {
    const [datos, setDatos] = useState([]);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const peopleResponse = await fetch("https://www.swapi.tech/api/people");
                const peopleData = await peopleResponse.json();
                setDatos(peopleData.results);

                const planetsResponse = await fetch("https://www.swapi.tech/api/planets");
                const planetsData = await planetsResponse.json();
                setPlanets(planetsData.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container my-5">
                <h2 className="text-white mb-3">Characters</h2>
                <div className="overflow-scroll-horizontal">
                    {datos.map((element, key) => (
                        <div className="card m-2 d-inline-block card-custom" key={element.name}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${key + 1}.jpg`}
                                className="card-img-top"
                                alt={element.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <p className="card-text">Gender: {element.gender}</p>
                                <p className="card-text">Hair Color: {element.hair_color}</p>
                                <p className="card-text">Eye Color: {element.eye_color}</p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/detalles/${key + 1}`} className="btn btn-dark">Learn More!</Link>
                                    <button
                                        type="button"
                                        onClick={() => addFav(element.name)}
                                        className="btn btn-warning"
                                    >
                                        ❤️
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container my-5">
                <h2 className="text-white mb-3">Planets</h2>
                <div className="overflow-scroll-horizontal">
                    {planets.map((element, key) => (
                        <div className="card m-2 d-inline-block card-custom" key={element.name}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${key + 1}.jpg`}
                                className="card-img-top"
                                alt={element.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <p className="card-text">Population: {element.population}</p>
                                <p className="card-text">Terrain: {element.terrain}</p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/planet/${key + 1}`} className="btn btn-dark">Learn More!</Link>
                                    <button
                                        type="button"
                                        onClick={() => addFav(element.name)}
                                        className="btn btn-warning"
                                    >
                                        ❤️
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
