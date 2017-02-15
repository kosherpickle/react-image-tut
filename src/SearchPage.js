import React from 'react';
import { Link } from 'react-router';

 
/**
 * A counter button: tap the button to increase the count.
 */
class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      searchTermPath: '/images/',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // takes the information from the input and updates state.searchTerm
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
      searchTermPath: '/images/' + event.target.value
    }, () => {
      
    });
  }
 
  render() {
    return (
      <div id="main-container">
        <div id="search-wrapper">
          <div id="search form">
            <div id="search-input-wrapper">
              <input 
                id="search-input" 
                value={this.state.searchTerm}
                onChange={this.handleChange} />
            </div>
            <div id="search-button-wrapper">
              <Link to={this.state.searchTermPath}>
                <button 
                  id="search-button"
                  >Search Images</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchPage;