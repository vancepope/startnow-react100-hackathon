import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchClass from './searchclass';

class SearchCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchClass
          handleDruid={ this.props.handleDruid }
          handleHunter={ this.props.handleHunter }
          handleMage={ this.props.handleMage }
          handlePaladin={ this.props.handlePaladin }
          handlePriest={ this.props.handlePriest }
          handleRogue={ this.props.handleRogue }
          handleShaman={ this.props.handleShaman }
          handleWarlock={ this.props.handleWarlock }
          handleWarrior={ this.props.handleWarrior }
        />
        <br />
      </div>
    );
  }
}
SearchCard.PropTypes = {
  handleDruid: PropTypes.func,
  handleHunter: PropTypes.func,
  handleMage: PropTypes.func,
  handlePaladin: PropTypes.func,
  handlePriest: PropTypes.func,
  handleRogue: PropTypes.func,
  handleShaman: PropTypes.func,
  handleWarlock: PropTypes.func,
  handleWarrior: PropTypes.func
};
export default SearchCard;
