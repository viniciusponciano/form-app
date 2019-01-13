import React from 'react';
import ReactDOM from 'react-dom';
import MainButton from './MainButton';

it('Renderiza o Botão Principal do Aplicativo', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MainButton />, div);
	ReactDOM.unmountComponentAtNode(div);
});