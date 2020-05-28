import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import List from './containers/List';
import Details from './containers/Details';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/:name" component={Details} />
				<Route path="/" component={List} />
			</Switch>
		</Router>
	);
}

export default App;
