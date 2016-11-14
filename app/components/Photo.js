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
          <section className="gallery-name">
            <h1>{data.tittle}</h1>
          </section>
          <section className="gallery-img-container">
            {data.images.map((img,index) => <img key={index} src={img} alt=""/>)}
          </section>
        </section>
      )
    })

    return (
      <div>
        <section className="galery-container">
          {gallery}
        </section>
      </div>
    )
  }
}

export default Photo;
