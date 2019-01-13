import React from 'react';
import ReactDOM from 'react-dom';
import CheckStars from './CheckStars';

it('Renderiza o Botão Principal do Aplicativo', () => {
	const div = document.createElement('div');
	ReactDOM.render(<CheckStars />, div);
	ReactDOM.unmountComponentAtNode(div);
});