import React from 'react';

// Home component

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <section className="home-display">
          <section className="home-design home-inner">CL.design</section>
          <section className="home-dev home-inner">CL.dev();</section>
          <section className="home-photo home-inner">CL.photos</section>
        </section>
        <section className="about">
          <p>About section</p>
        </section>

      </div>
    )
  }
}

export default Home;
