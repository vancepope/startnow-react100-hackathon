import React, { Component } from 'react';
import Card from './card';

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  renderCards(card, index) {
    return (
      <Card
        key={ card.cardId }
        index={ index }
        name={ card.name }
        cardSet={ card.cardSet }
        img={ card.img }
        text={ card.text }
      />
    );
  }
  render() {
    return (
        <div className='card'>
          <div className='card-header text-center'>Hearthstone Cards</div>
          <div className='card-body c4rds'>
            { (this.props.isDruid 
              && !this.props.isHunter
              && !this.props.isMage 
              && !this.props.isPaladin
              && !this.props.isPriest
              && !this.props.isRogue
              && !this.props.isShaman
              && !this.props.isWarlock
              && !this.props.isWarrior 
            ) && Object.values(this.props.druid).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isHunter
              && !this.props.isDruid
              && !this.props.isMage 
              && !this.props.isPaladin
              && !this.props.isPriest
              && !this.props.isRogue
              && !this.props.isShaman
              && !this.props.isWarlock
              && !this.props.isWarrior 
              ) && Object.values(this.props.hunter).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isMage
              && !this.props.isDruid
              && !this.props.isHunter 
              && !this.props.isPaladin
              && !this.props.isPriest
              && !this.props.isRogue
              && !this.props.isShaman
              && !this.props.isWarlock
              && !this.props.isWarrior)
              && Object.values(this.props.mage).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isPaladin
              && !this.props.isMage 
              && !this.props.isDruid
              && !this.props.isHunter
              && !this.props.isPriest
              && !this.props.isRogue
              && !this.props.isShaman
              && !this.props.isWarlock
              && !this.props.isWarrior)
              && Object.values(this.props.paladin).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isPriest
              && !this.props.isMage 
              && !this.props.isPaladin
              && !this.props.isDruid
              && !this.props.isHunter
              && !this.props.isRogue
              && !this.props.isShaman
              && !this.props.isWarlock
              && !this.props.isWarrior ) 
              && Object.values(this.props.priest).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isRogue
              && !this.props.isMage 
              && !this.props.isPaladin
              && !this.props.isPriest
              && !this.props.isDruid
              && !this.props.isHunter
              && !this.props.isShaman
              && !this.props.isWarlock
              && !this.props.isWarrior )
              && Object.values(this.props.rogue).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isShaman
              && !this.props.isMage 
              && !this.props.isPaladin
              && !this.props.isPriest
              && !this.props.isRogue
              && !this.props.isDruid
              && !this.props.isHunter
              && !this.props.isWarlock
              && !this.props.isWarrior ) && Object.values(this.props.shaman).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isWarlock
              && !this.props.isMage 
              && !this.props.isPaladin
              && !this.props.isPriest
              && !this.props.isRogue
              && !this.props.isShaman
              && !this.props.isDruid
              && !this.props.isHunter
              && !this.props.isWarrior 
              ) && Object.values(this.props.warlock).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
            { (this.props.isWarrior
              && !this.props.isMage 
              && !this.props.isPaladin
              && !this.props.isPriest
              && !this.props.isRogue
              && !this.props.isShaman
              && !this.props.isWarlock
              && !this.props.isDruid
              ) && Object.values(this.props.warrior).map((card, index) => (
                this.renderCards(card, index)
              ))
            }
          </div>
        </div>
    );
  }
}

export default Cards;
