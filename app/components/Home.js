import React from 'react';
import { Link } from 'react-router'

// Font Awseome component
const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

// Home component

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      creativeType: "home-dev",
      designBttn: 'home-bttn',
      devBttn: "home-bttn home-bttn-active-dev",
      photoBttn: "home-bttn",
    }
    this.updateCreative = this.updateCreative.bind(this);
    this.stripState = this.stripState.bind(this);
    this.homeClick = this.homeClick.bind(this);
  }

  stripState() {
    this.setState({
      designBttn: 'home-bttn ',
      devBttn: "home-bttn",
      photoBttn: "home-bttn"
    })
  }

  updateCreative(type, stateToUpdate, actButton) {
    console.log(type);
    this.stripState();
    this.setState({
      creativeType: type,
      [stateToUpdate]: `home-bttn home-bttn-active-${actButton}`,
    })
  }

  homeClick() {
    this.stripState();
    if (this.state.creativeType = 'home-design') {
      this.updateCreative("home-dev", "devBttn", "dev");
    } else if (this.state.creativeType = 'home-dev') {
      this.updateCreative("home-photo", "photoBttn", "photo");
    } else {
      this.updateCreative("home-design", "designBttn", "design");
    }
  }

  render() {
    return (
      <div>
        <section className="home-display" >
          <section className={`home-img ${this.state.creativeType}`}>

            <section className={`home-ctrl`}>

              <section  className={this.state.designBttn} onClick={
                () => {
                  this.updateCreative("home-design", "designBttn", "design");
                }
              }> Designer </section>
              <section  className={this.state.devBttn} onClick={
                () => {
                  this.updateCreative("home-dev", "devBttn", "dev");
                }
              }> Developer </section>
              <section  className={this.state.photoBttn} onClick={
                () => {
                  this.updateCreative("home-photo", "photoBttn", "photo");
                }
              }> Photographer </section>

            </section>

          </section>

        </section>
        <section className="about">
          <section className="home-inner">
            <h1>About Me</h1>
            <p>
              Hello! I’m Christopher Lindor a Designer, Web Developer and Photographer with over 6 years of exprience. I started out editing pictures in photoshop and myspace profile templates in highschool, which fueled my love for the web. I became intersted in photography as another creative outlet and now I never leave home with out a camera.
            </p>
            <p>
              See my <Link to="/work"> work </Link> or check out some of my <Link to="/photo">photography</Link>
            </p>
          </section>
        </section>

      </div>
    )
  }
}

export default Home;
