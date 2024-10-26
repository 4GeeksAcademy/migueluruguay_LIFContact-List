import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import Info from "../component/Info";
import Change from "../component/Change";


export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5">
			<div className="position-relative m-2 p-3">
					<Link to="/nuevo-contacto">
						<button className="btn btn-success position-absolute top-0 end-1">Agregar Contacto </button>
					</Link>
				</div>
			<div>
				<Card />
				
			</div>


		</div>
	);
};
