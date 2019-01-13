import React from 'react';
import ReactDOM from 'react-dom';
import ListaPesquisas from './ListaPesquisas';

it('Renderiza a Lista de Pesquisas', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ListaPesquisas />, div);
	ReactDOM.unmountComponentAtNode(div);
});