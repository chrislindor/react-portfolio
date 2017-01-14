import React from 'react';
import Slider  from 'react-slick';


const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

class SliderDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="port-items">
        <section className="slick-container">
          {this.props.children}
        </section>

        <section className="slide-caption-container">
          <p className="slide-caption">{this.props.slideCaption}</p>
          <p className="item-count">{this.props.currentSlide}/{this.props.totalSlides}</p>
          <section className="slide-control">
            <div className='n-p-button bttn-room' onClick={this.props.prevButton}><Fa iconClass='fa-angle-left'/></div>
            <div className='n-p-button' onClick={this.props.nextButton}><Fa iconClass='fa-angle-right'/></div>
          </section>
        </section>


      </section>
    )
  }
}

SliderDisplay.propTypes = {

  prevButton: React.PropTypes.func.isRequired,
  nextButton: React.PropTypes.func.isRequired,
  currentSlide: React.PropTypes.number.isRequired,
  totalSlides: React.PropTypes.number.isRequired,
  slideCaption: React.PropTypes.string.isRequired
}


{/* <SliderDisplay
  sliderSettings={settings1}
  sliderRef='slider1'
  sliderImages={() => {
    portGallery(currentPortItem.item1.imgs)
  }}
  prevButton={() => {
    this.previous('slider1')
  }}
  nextButton={() => {
    this.next('slider1')
  }}
  currentSlide={this.state.item1Count}
  totalSlides={currentPortItem.item1.imgs.length}
  slideCaption={currentPortItem.item1.caption}
/> */}

{/* <SliderDisplay

  prevButton={() => {
    this.previous('slider1')
  }}
  nextButton={() => {
    this.next('slider1')
  }}
  currentSlide={this.state.item1Count}
  totalSlides={currentPortItem.item1.imgs.length}
  slideCaption={currentPortItem.item1.caption}
>
  <section className="slick-container">
    <Slider  {...settings1} ref='slider1'>
      { portGallery(currentPortItem.item1.imgs)}
    </Slider>
  </section>
</SliderDisplay> */}


export default SliderDisplay;
