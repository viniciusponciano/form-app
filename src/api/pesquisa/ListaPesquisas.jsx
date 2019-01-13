import React, {Component} from 'react';
import MainButton from '../utils/MainButton';
import { FormattedMessage } from 'react-intl';

class ListaPesquisas extends Component {
	render() {
		return (<div>
			<MainButton/>
			<FormattedMessage id="listaPesquisas.titulo" />
		</div>);
	}
}

export default ListaPesquisas;