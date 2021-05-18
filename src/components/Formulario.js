import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, obtenerMarca } from '../helper';

const Campo = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
`;

const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	display: block;
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
	appearance: none;
`;

const InputRadio = styled.input`
	margin: 0 1rem;
`;

const Boton = styled.button`
	background-color: #00838f;
	font-size: 16px;
	width: 100%;
	padding: 1rem;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	transition: background-color 0.3s ease;
	margin-top: 2rem;

	&:hover {
		background-color: #26c6da;
		cursor: pointer;
	}
`;

const Error = styled.div`
	background-color: red;
	padding: 1rem;
	color: white;
	width: 100%;
	text-align: center;
	margin-bottom: 2rem;
`;

const Formulario = () => {
	// State para los datos.
	const [datos, setDatos] = useState({
		marca: '',
		year: '',
		plan: 'basico'
	});
	// State para el manejo del Error.
	const [error, setError] = useState(false);

	// Destructuración del State.
	const { marca, year, plan } = datos;

	// Manejador del evento onChange.
	const handleChange = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
	};

	// Manejador del evento onSubmit.
	const handleSubmit = (e) => {
		e.preventDefault();

		if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
			setError(true);
			return;
		}
		setError(false);

		// Base de 2000.
		let resultado = 2000;

		// Obtener diferencia de año
		const diferencia = obtenerDiferenciaYear(year);

		// Resta 3% por cada año.
		resultado -= (diferencia * 3 * resultado) / 100;

		resultado = obtenerMarca(marca) * resultado;
		console.log(resultado);
	};

	return (
		<form onSubmit={handleSubmit}>
			{error ? <Error>Todos los campos son obligatorios</Error> : null}
			<Campo>
				<Label>Marca</Label>
				<Select name="marca" value={marca} onChange={handleChange}>
					<option value="">-- Seleccione --</option>
					<option value="americano">Americano</option>
					<option value="europeo">Europeo</option>
					<option value="asiatico">Asiatico</option>
				</Select>
			</Campo>
			<Campo>
				<Label>Año</Label>
				<Select name="year" value={year} onChange={handleChange}>
					<option value="">-- Seleccione --</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
				</Select>
			</Campo>
			<Campo>
				<Label>Plan</Label>
				<InputRadio
					type="radio"
					name="plan"
					value="basico"
					checked={plan === 'basico'}
					onChange={handleChange}
				/>
				Básico
				<InputRadio
					type="radio"
					name="plan"
					value="completo"
					checked={plan === 'completo'}
					onChange={handleChange}
				/>
				Completo
			</Campo>
			<Boton type="submit">Cotizar</Boton>
		</form>
	);
};

export default Formulario;
