import React from 'react';
import { primerMayucula } from '../helper';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
	background-color: #00838f;
	padding: 1rem;
	color: #fff;
	text-align: center;
	margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
	const { marca, year, plan } = datos;

	if (marca === '' || year === '' || plan === '') return null;

	return (
		<ContenedorResumen>
			<h2>Resumen de Cotización</h2>
			<ul>
				<li>Marca: {primerMayucula(marca)}</li>
				<li>Año del Vehículo: {year}</li>
				<li>Plan: {primerMayucula(plan)}</li>
			</ul>
		</ContenedorResumen>
	);
};

export default Resumen;
