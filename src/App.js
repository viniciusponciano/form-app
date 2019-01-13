import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchAppBar from './api/utils/SearchAppBar.jsx'
import './App.css';
import ListaPesquisas from "./api/pesquisa/ListaPesquisas";
import EditaPesquisa from "./api/pesquisa/EditaPesquisa";

class App extends Component {
  render() {
		return (
			<Router>
				<div className="App">
					<SearchAppBar/>
					<Route exact path="/" component={ListaPesquisas}/>
					<Route exact path="/pesquisa" component={EditaPesquisa}/>
					<Route path="/pesquisa/:id" component={EditaPesquisa}/>
				</div>
			</Router>
		);
	}
}

export default App;
