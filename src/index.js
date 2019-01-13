import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import { flattenMessages } from "./api/utils/utils";
import messages from './internacionalizacao';

addLocaleData([...en, ...pt]);
let params = new URLSearchParams(document.location.search.substring(1));
let locale = params.get("lang") || 'en-US';
ReactDOM.render(
	<IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
		<App />
	</IntlProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
