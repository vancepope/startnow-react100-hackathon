import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
      super(props);
  }
  addDefaultSrc(event) {
    event.target.src = './img/notFound.png';
  }
  render() {
    return (
      <div className='card c4rd'>
        <img className='card-img-top' onError={ this.addDefaultSrc } src={ this.props.img ? this.props.img : './img/notFound.png' } alt={ this.props.name } />
        <div className='card-body'>
          <p className='card-text text-center'> { this.props.name }</p>
          <br />
          <p className='card-text text-center' > { this.props.text }</p>
        </div>
      </div>
    );
  }
}

export default Card;
