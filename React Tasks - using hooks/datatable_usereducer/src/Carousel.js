import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % this.props.items.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      activeIndex:
        (prevState.activeIndex - 1 + this.props.items.length) %
        this.props.items.length,
    }));
  };

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="carousel">
        <div className='mb-2'>
        <button onClick={this.prevSlide}>Previous</button>
        </div>
        <div className="carousel-content">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? 'active' : ''
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className='mt-5'>
        <button onClick={this.nextSlide}>Next</button>
        </div>
      </div>
    );
  }
}

// Example usage:
// const items = ["Item 1", "Item 2", "Item 3"];
// <Carousel items={items} />

export default Carousel;
