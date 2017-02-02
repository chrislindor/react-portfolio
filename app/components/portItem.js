import React from 'react';
import Slider  from 'react-slick';
import portData from './portData';
import SliderDisplay from './SliderDisplay';
import PortIntro from './portIntro'
import { Link } from 'react-router';

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

class portItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item1Count: 1,
      item2Count: 1,
      item3Count: 1,
      item4Count: 1
    },
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  // Match portfolio data with supplied link param
  getPortItem(data) {
    let itemData = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].url === this.props.routeParams.portItemName) {
        itemData = {
          currentItemData: data[i],
          nextLinkData: data[i+1]
        }
      }
    }
    return itemData;
  }

  checkNext(data) {
    let checkedItem = '';
    if (data === undefined) {
      checkedItem = portData[0];
    } else {
      checkedItem = data;
    }
    return checkedItem;
  }

  next(refToUpdate) {
    this.refs[refToUpdate].slickNext()
  }
  previous(refToUpdate) {
    this.refs[refToUpdate].slickPrev()
  }

  render() {
    let pageData = this.getPortItem(portData);

    let currentPortItem = pageData.currentItemData;
    let nextPortItem = this.checkNext(pageData.nextLinkData);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      swipe: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,

    }

    let masterCounter = (stateToUpdate) => {
      let handleCount = {
        afterChange: (index) => {
          this.setState({
            [stateToUpdate]: index + 1,
          });
        }
      }
      return handleCount;
    }

    let item1Tracker = masterCounter('item1Count');


    const settings1 = Object.assign({}, settings, masterCounter('item1Count'));
    const settings2 = Object.assign({}, settings, masterCounter('item2Count'));
    const settings3 = Object.assign({}, settings, masterCounter('item3Count'));
    const settings4 = Object.assign({}, settings, masterCounter('item4Count'));


      let portGallery = (item) => {
        let dataToRender = item;
        let imgMap = dataToRender.map((data,index) => {
          return(
            <div key={index}><img className="slide-img" src={data} /></div>
          )
        });
        return imgMap
      }


    return (
      <div>
        <PortIntro
          introImg={currentPortItem.intro.img}
          itemTitle={currentPortItem.title}
          introText={currentPortItem.intro.text}
        />

        <SliderDisplay
          prevButton={() => {this.previous('slider1')}}
          nextButton={() => {this.next('slider1')}}
          currentSlide={this.state.item1Count}
          totalSlides={currentPortItem.item1.imgs.length}
          slideCaption={currentPortItem.item1.caption}
        >
            <Slider  {...settings1} ref='slider1'>
              { portGallery(currentPortItem.item1.imgs)}
            </Slider>
        </SliderDisplay>





        {/* Checks the port data to see if other item set exisi then renders content */}
        {
          currentPortItem.item2 &&
          <SliderDisplay
            prevButton={() => this.previous('slider2')}
            nextButton={() => this.next('slider2')}
            currentSlide={this.state.item2Count}
            totalSlides={currentPortItem.item2.imgs.length}
            slideCaption={currentPortItem.item2.caption}
          >
              <Slider  {...settings2} ref='slider2'>
                { portGallery(currentPortItem.item2.imgs)}
              </Slider>
          </SliderDisplay>
        }


        {
          currentPortItem.item3 &&
          <SliderDisplay
            prevButton={() => this.previous('slider3')}
            nextButton={() => this.next('slider3')}
            currentSlide={this.state.item3Count}
            totalSlides={currentPortItem.item3.imgs.length}
            slideCaption={currentPortItem.item3.caption}
          >
              <Slider  {...settings3} ref='slider3'>
                { portGallery(currentPortItem.item3.imgs)}
              </Slider>
          </SliderDisplay>
        }


        {
          currentPortItem.item4 &&
          <SliderDisplay
            prevButton={() => this.previous('slider4')}
            nextButton={() => this.next('slider4')}
            currentSlide={this.state.item4Count}
            totalSlides={currentPortItem.item4.imgs.length}
            slideCaption={currentPortItem.item4.caption}
          >
              <Slider  {...settings4} ref='slider4'>
                { portGallery(currentPortItem.item4.imgs)}
              </Slider>
          </SliderDisplay>
        }


        <section className='next-port-item'>
          <p>Next</p>
          <p><Link to={`work/${nextPortItem.url}`} className='next-link'>{nextPortItem.title}</Link></p>

        </section>
      </div>
    )
  }
}

export default portItem;
