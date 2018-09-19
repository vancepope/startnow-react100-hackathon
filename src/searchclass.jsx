import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button name='isDruid' type='button' className='btn btn-secondary' onClick={ this.props.handleDruid }>
            <img className='img-thumbnail' src='./img/druid.png' alt='Druid' />
          </button>
          <button name='isHunter' type='button' className='btn btn-secondary' onClick={ this.props.handleHunter }>
            <img className='img-thumbnail' src='./img/hunter.png' alt='Hunter' />
          </button>
          <button name='isMage' type='button' className='btn btn-secondary' onClick={ this.props.handleMage }>
            <img className='img-thumbnail' src='./img/mage.png' alt='Mage' />
          </button>
          <button name='isPaladin' type='button' className='btn btn-secondary' onClick={ this.props.handlePaladin }>
            <img className='img-thumbnail' src='./img/paladin.png' alt='Paladin' />
          </button>
          <button name='isPriest' type='button' className='btn btn-secondary' onClick={ this.props.handlePriest }>
            <img className='img-thumbnail' src='./img/priest.png' alt='Priest' />
          </button>
          <button name='isRogue' type='button' className='btn btn-secondary' onClick={ this.props.handleRogue }>
            <img className='img-thumbnail' src='./img/rogue.png' alt='Rogue' />
          </button>
          <button name='isShaman' type='button' className='btn btn-secondary' onClick={ this.props.handleShaman }>
            <img className='img-thumbnail' src='./img/shaman.png' alt='Shaman' />
          </button>
          <button name='isWarlock' type='button' className='btn btn-secondary' onClick={ this.props.handleWarlock }>
            <img className='img-thumbnail' src='./img/warlock.png' alt='Warlock' />
          </button>
          <button name='isWarrior' type='button' className='btn btn-secondary' onClick={ this.props.handleWarrior }>
            <img className='img-thumbnail' src='./img/warrior.png' alt='Warrior' />
          </button>
        </div>
      </div>
    );
  }
}
SearchClass.PropTypes = {
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

export default SearchClass;
