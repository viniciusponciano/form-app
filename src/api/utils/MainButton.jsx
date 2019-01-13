import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
	fab: {
		margin: 'auto',
		marginBottom: '5px',
		marginRight: '5px',
		display: 'flex',
		[theme.breakpoints.up('md')]: { display: 'none' },
	},
	fabExtended: {
		margin: 'auto',
		marginTop: '5px',
		marginRight: '5px',
		display: 'none',
		[theme.breakpoints.up('md')]: { display: 'flex' },
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});

function MainButton(props) {
	const { classes, history } = props;

	const onClick = () => history.push('pesquisa');

	return (
		<div id="mainButton">
			<Fab color="secondary" aria-label="Add" className={classes.fab} onClick={onClick}>
				<AddIcon/>
			</Fab>
			<Fab variant="extended" color="primary" aria-label="Add" className={classes.fabExtended} onClick={onClick}>
				<NavigationIcon className={classes.extendedIcon}/>
				Extended
			</Fab>
		</div>
	);
}

MainButton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MainButton));