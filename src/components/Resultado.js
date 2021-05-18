import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const MensajeFail = styled.p`
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
	background-color: rgb(127, 224, 237);
`;

const ResultadoCotizacion = styled.div`
	text-align: center;
	padding: 0.5rem;
	border: 1px solid #26c6da;
	background-color: rgb(127, 224, 237);
	margin-top: 1rem;
	position: relative;
`;

const MensajePass = styled.p`
	color: #00838f;
	padding: 1rem;
	text-transform: uppercase;
	font-weight: bold;
	margin: 0;
`;

const Resultado = ({ cotizacion }) => {
	return cotizacion === 0 ? (
		<MensajeFail>Elige Marca, Año y tipo de Seguro</MensajeFail>
	) : (
		<ResultadoCotizacion>
			<MensajePass>El Total es: $ {cotizacion}</MensajePass>
		</ResultadoCotizacion>
	);
};

Resultado.propTypes = {
	cotizacion: PropTypes.number.isRequired
};

export default Resultado;
