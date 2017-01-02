import React from 'react';
import Slider  from 'react-slick';


class SliderDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="port-items">
        <Slider  {...this.props.sliderSettings} ref={this.props.sliderRef}>
          { this.props.sliderImages}
        </Slider>
        <div className='n-p-button' onClick={this.props.prevButton}>Previous</div>
        <div className='n-p-button' onClick={this.props.nextButton}>Next</div>
        <p className="item-count">{this.props.currentSlide}/{this.props.totalSlides}</p>
        <p className="slide-caption">{this.props.slideCaption}</p>
      </div>
    )
  }
}

SliderDisplay.propTypes = {
  sliderSettings: React.PropTypes.object.isRequired,
  sliderRef: React.PropTypes.string.isRequired,
  sliderImages: React.PropTypes.func.isRequired,
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

export default SliderDisplay;
