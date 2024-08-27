import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ favoritos, borrar }) => {
    return (
        <nav className="navbar navbar-light bg-dark mb-3 px-3">
            <div className="container-fluid">
                <Link to="/">
                    <span className="navbar-brand mb-0">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                            alt="Star Wars"
                            width="100"
                            height="50"
                        />
                    </span>
                </Link>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-dark dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites {favoritos.length}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {favoritos.map((fav, index) => (
                                <li key={index}>
                                    <button 
                                        className="dropdown-item d-flex justify-content-between align-items-center" 
                                        onClick={() => borrar(index)}
                                    >
                                        <span>{fav}</span>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
