import React from 'react';
import Slider  from 'react-slick';
import portData from './portData';



class portItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item1Count: 1
    }
  }

  // Match portfolio data with supplied link param
  getPortItem(data) {
    let currentPortItem = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === this.props.routeParams.portItemName) {
        currentPortItem = data[i];
      }
    }
    return currentPortItem;
  }



  render() {
    let currentPortItem = this.getPortItem(portData);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      swipe: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (index) => {
        this.setState({ item1Count: index + 1 });
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
          <p className="item-count">{this.state.item1Count}/{currentPortItem.item1.imgs.length}</p>
          <p className="slide-caption">{currentPortItem.item1.caption}</p>
        </section>
        {
          currentPortItem.item2 &&
          <section className="port-items">
            <Slider  {...settings}>
              { portGallery(currentPortItem.item2.imgs)}
            </Slider>
            <p className="item-count">{this.state.item1Count}/{currentPortItem.item2.imgs.length}</p>
            <p className="slide-caption">{currentPortItem.item2.caption}</p>
          </section>
        }
      </div>
    )
  }
}

export default portItem;
