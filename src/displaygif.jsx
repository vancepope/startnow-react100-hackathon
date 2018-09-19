import React, { Component } from 'react';
import Gif from './gif';

class DisplayGif extends Component {
  constructor(props) {
    super(props);
    this.renderGif = this.renderGif.bind(this);
  }
  renderGif(gif, index) {
    return (
      <Gif img={ gif.images.original.url } name={ gif.title } />
    );
  }
  render() {
    return (
      <div className='card'>
        <div className='card-header text-center'>GIFs</div>
        <div className='card-body'>
          <div className='image'>
            {
              Object.values(this.props.hsGifs).map((gif, index) => (
                this.renderGif(gif, index)
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayGif;
