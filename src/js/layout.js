import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/home.css";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Card } from "./views/card";
import Detalles from "./views/charactersDetails";
import DetallesPlanets from "./views/planetsDetails";

const Layout = () => {
    const [favoritos, setFavoritos] = useState([]);

    const addFavoritos = (fav) => {
        setFavoritos([...favoritos, fav]);
    }

    const borrar = (index) => {
        setFavoritos(favoritos.filter((favoritos, elm) => elm !== index));
    }

    useEffect(() => {
        addFavoritos;
        borrar;
    }, [favoritos]);

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar favoritos={favoritos} borrar={borrar} />
                    <Routes>
                        <Route exact path="/" element={<Card addFav={addFavoritos} />} />
                        <Route exact path="/detalles/:idDetalles" element={<Detalles />} />
                        <Route exact path="/planet/:idPlanets" element={<DetallesPlanets />} />
                        <Route path="*" element={<h1>Not found</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
}

export default injectContext(Layout);