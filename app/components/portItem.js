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
    }
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

  render() {
    let pageData = this.getPortItem(portData);
    console.log(pageData);

    let currentPortItem = pageData.currentItemData;
    let nextPortItem = this.checkNext(pageData.nextLinkData);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      swipe: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (index) => {
        this.setState({
          item1Count: index + 1,
          item2Count: index + 1,
        });
      }
    }



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
        </section>
        <section className="port-items">
          <Slider  {...settings}>
            { portGallery(currentPortItem.item1.imgs)}
          </Slider>
          {/* <p className="item-count">{this.state.item1Count}/{currentPortItem.item1.imgs.length}</p> */}
          <p className="slide-caption">{currentPortItem.item1.caption}</p>
        </section>
        {/* Checks the port data to see if other item set exisi then renders content */}
        {
          currentPortItem.item2 &&
          <section className="port-items">
            <Slider  {...settings}>
              { portGallery(currentPortItem.item2.imgs)}
            </Slider>
            {/* <p className="item-count">{this.state.item2Count}/{currentPortItem.item2.imgs.length}</p> */}
            <p className="slide-caption">{currentPortItem.item2.caption}</p>
          </section>
        }
        {
          currentPortItem.item3 &&
          <section className="port-items">
            <Slider  {...settings}>
              { portGallery(currentPortItem.item3.imgs)}
            </Slider>
            {/* <p className="item-count">{this.state.item1Count}/{currentPortItem.item3.imgs.length}</p> */}
            <p className="slide-caption">{currentPortItem.item3.caption}</p>
          </section>
        }
        {
          currentPortItem.item4 &&
          <section className="port-items">
            <Slider  {...settings}>
              { portGallery(currentPortItem.item4.imgs)}
            </Slider>
            {/* <p className="item-count">{this.state.item1Count}/{currentPortItem.item4.imgs.length}</p> */}
            <p className="slide-caption">{currentPortItem.item4.caption}</p>
          </section>
        }
        <section className='next-port-item'>
          <p>Next</p>
          <Link to={`work/${nextPortItem.url}`}>{nextPortItem.title}</Link>
        </section>
      </div>
    )
  }
}

export default portItem;
