import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import Info from "../component/Info";
import Change from "../component/Change";


export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
		<div className="text-center mt-5">
           <div>
			<Card />
			</div>
		
			
			
			<Link to="/nuevo-contacto">
            <button className="btn btn-success">Agregar Contacto </button>
            </Link>

		</div>
	);
};
