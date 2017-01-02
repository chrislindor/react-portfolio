import React from 'react';
import Slider  from 'react-slick';
import portData from './portData';
import { Link } from 'react-router';



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
        <section className="project-intro">
          <img src={currentPortItem.intro.img} alt="" className="intro-img"/>
          <h1 className="port-title">{currentPortItem.title}</h1>
          <p className="intro-copy">
            {currentPortItem.intro.text}
          </p>
          {
            currentPortItem.linkSrc &&
            <p className="intro-link">
              Github repo: <a href={currentPortItem.linkSrc}>Source Code</a>
            </p>
          }
        </section>
        <section className="port-items">
          <Slider  {...settings1} ref='slider1'>
            { portGallery(currentPortItem.item1.imgs)}
          </Slider>
          <div className='n-p-button' onClick={() => {
            this.previous('slider1');
          }}>Previous</div>
          <div className='n-p-button' onClick={() => {
            this.next('slider1')
          }}>Next</div>
          <p className="item-count">{this.state.item1Count}/{currentPortItem.item1.imgs.length}</p>
          <p className="slide-caption">{currentPortItem.item1.caption}</p>
        </section>
        {/* Checks the port data to see if other item set exisi then renders content */}
        {
          currentPortItem.item2 &&
          <section className="port-items">
            <Slider  {...settings2} >
              { portGallery(currentPortItem.item2.imgs)}
            </Slider>
            <p className="item-count">{this.state.item2Count}/{currentPortItem.item2.imgs.length}</p>
            <p className="slide-caption">{currentPortItem.item2.caption}</p>
          </section>
        }
        {
          currentPortItem.item3 &&
          <section className="port-items">
            <Slider  {...settings3}>
              { portGallery(currentPortItem.item3.imgs)}
            </Slider>
            <p className="item-count">{this.state.item3Count}/{currentPortItem.item3.imgs.length}</p>
            <p className="slide-caption">{currentPortItem.item3.caption}</p>
          </section>
        }
        {
          currentPortItem.item4 &&
          <section className="port-items">
            <Slider  {...settings4}>
              { portGallery(currentPortItem.item4.imgs)}
            </Slider>
            <p className="item-count">{this.state.item4Count}/{currentPortItem.item4.imgs.length}</p>
            <p className="slide-caption">{currentPortItem.item4.caption}</p>
          </section>
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
