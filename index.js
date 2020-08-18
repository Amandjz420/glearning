/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as ReduxProvider } from 'react-redux';
import * as React from 'react';
import store from './app/redux/store';

export default function Main() {
	return (
		<ReduxProvider store={store}>
			<App />
		</ReduxProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
