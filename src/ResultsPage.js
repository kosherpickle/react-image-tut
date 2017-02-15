import React from 'react';

class ResultsPage extends React.Component {
  contextTypes: {
  	router: React.PropTypes.object.isRequired
  }

  childContextTypes: {
    location: React.PropTypes.object
  }



  render() {
  	console.log(this.props.params);
    return (
      <div id="results-container">
      	<p> Your search term is: {this.props.params.searchTerm}</p>
      </div>
    );
  }
}
export default ResultsPage;