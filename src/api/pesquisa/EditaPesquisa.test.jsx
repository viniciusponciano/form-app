import React from 'react';
import ReactDOM from 'react-dom';
import EditaPesquisa from './EditaPesquisa';

it('Renderiza o Formulário de Pesquisa', () => {
	const div = document.createElement('div');
	ReactDOM.render(<EditaPesquisa />, div);
	ReactDOM.unmountComponentAtNode(div);
});