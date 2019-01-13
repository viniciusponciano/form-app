import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import CheckStars from "../utils/CheckStars";

class EditaPesquisa extends Component {
	state = { nota: 0, nome: '' };

	onChange = (input, value) => this.setState({ [input]: value });

	render() {
		return (<div>
			<CheckStars
				label={<FormattedMessage id="editaPesquisa.nota.rotulo" />}
				value={this.state.nota}
				helperText={<FormattedMessage id="editaPesquisa.nota.mensagemErro" />}
				onChange={this.onChange}
			/>
			<TextField
				label={<FormattedMessage id="editaPesquisa.nome.rotulo" />}
				value={this.state.nome}
				onChange={(event) => this.onChange('nome', event.target.value)}
				fullWidth
			/>
		</div>);
	}
}

export default EditaPesquisa;