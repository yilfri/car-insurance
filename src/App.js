import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

import styled from '@emotion/styled';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFomulario = styled.div`
	background-color: #fff;
	padding: 3rem;
`;

function App() {
	const [resumen, setResumen] = useState({
		cotizacion: 0,
		datos: {
			marca: '',
			year: '',
			plan: ''
		}
	});

	const [cargando, setCargando] = useState(false);

	const { cotizacion, datos } = resumen;

	return (
		<Contenedor>
			<Header titulo="Cotizador de Vehículos " />

			<ContenedorFomulario>
				<Formulario setResumen={setResumen} setCargando={setCargando} />

				{cargando ? <Spinner /> : null}

				<Resumen datos={datos} />

				{!cargando ? <Resultado cotizacion={cotizacion} /> : null}
			</ContenedorFomulario>
		</Contenedor>
	);
}

export default App;
