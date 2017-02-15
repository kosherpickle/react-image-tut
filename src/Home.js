import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';

class Home extends React.Component {


	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={SearchPage} />
				<Route path='/images/:searchTerm' component={ResultsPage} />
			</Router>
		)
	}
}

export default Home;