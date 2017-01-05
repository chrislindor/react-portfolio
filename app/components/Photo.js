import React from 'react';
import galleryData from './galleryData';

// Photo component

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageGalleries: galleryData
    }
  }

  render() {
    let gallery = this.state.imageGalleries.map((data,index) => {
      return (
        <section key={index}>

          <section className="gall-img-container">
            {data.images.map((img,index) => <img key={index} src={img} alt=""/>)}
          </section>
        </section>
      )
    })

    return (
      <div>
        <section className="gall-head">
          <h1>Photography</h1>
          <p>
            Some of the photos I've taken through my travels. I am also on Instagram <a href="www.instagram.com/ftm_chris">@ftm_chris</a>
          </p>
        </section>
        <section className="gall-container">
          {gallery}
        </section>
      </div>
    )
  }
}

export default Photo;
