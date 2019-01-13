import React from 'react';
import ReactDOM from 'react-dom';
import SearchAppBar from './SearchAppBar';

it('Renderiza a Barra Principal do Aplicativo', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SearchAppBar />, div);
	ReactDOM.unmountComponentAtNode(div);
});