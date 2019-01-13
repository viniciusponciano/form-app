import React from 'react';
import { Checkbox, FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';

class CheckStars extends React.Component {

	handleChange = event => this.props.onChange('nota', Number(event.target.value));

	render() {
		const { label, value, helperText } = this.props;
		return (
			<FormControl fullWidth>
				<InputLabel htmlFor="Nota" required focused shrink={false}>{label}</InputLabel>
				<div id="Nota" style={{ marginLeft: '50px', marginTop: '7px', marginRight: 'auto'}}>
					<Checkbox
						checked={value >= 1}
						onChange={this.handleChange}
						value="1"
						icon={<StarBorder/>}
						checkedIcon={<Star/>}
					/>
					<Checkbox
						checked={value >= 2}
						onChange={this.handleChange}
						value="2"
						icon={<StarBorder/>}
						checkedIcon={<Star/>}
					/>
					<Checkbox
						checked={value >= 3}
						onChange={this.handleChange}
						value="3"
						icon={<StarBorder/>}
						checkedIcon={<Star/>}
					/>
					<Checkbox
						checked={value >= 4}
						onChange={this.handleChange}
						value="4"
						icon={<StarBorder/>}
						checkedIcon={<Star/>}
					/>
					<Checkbox
						checked={value >= 5}
						onChange={this.handleChange}
						value="5"
						icon={<StarBorder/>}
						checkedIcon={<Star/>}
					/>
					<FormHelperText
						style={{ marginTop: '-5px', marginBottom: '10px' }}
						error={!value}>
						{helperText}
					</FormHelperText>
				</div>
			</FormControl>
		);
	}
}

export default CheckStars;