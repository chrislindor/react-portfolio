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
      creativeType: "home-design",
      creativeStatus: 'Designer',
      designBttn: 'home-bttn home-bttn-active',
      devBttn: "home-bttn",
      photoBttn: "home-bttn"
    }
    this.updateCreative = this.updateCreative.bind(this);
    this.stripState = this.stripState.bind(this);
  }

  stripState() {
    this.setState({
      designBttn: 'home-bttn ',
      devBttn: "home-bttn",
      photoBttn: "home-bttn"
    })
  }

  updateCreative(type, status, stateToUpdate) {
    console.log(type);
    this.stripState();
    this.setState({
      creativeType: type,
      creativeStatus: status,
      [stateToUpdate]: "home-bttn home-bttn-active"
    })
  }

  render() {
    return (
      <div>
        <section className="home-display">
          <section className={`home-img ${this.state.creativeType}`}>

            <section className="home-ctrl">
              <p className="current-creative">{this.state.creativeStatus}</p>
              <img src="./assets/images/code.svg" className={this.state.devBttn} onClick={
                () => {
                  this.updateCreative("home-dev", "Developer", "devBttn");
                }
              }/>
              <img src="./assets/images/pencil-o.svg" className={this.state.designBttn} onClick={
                () => {
                  this.updateCreative("home-design", "Designer", "designBttn");
                }
              }/>
              <img src="./assets/images/camera.svg" className={this.state.photoBttn} onClick={
                () => {
                  this.updateCreative("home-photo", "Photographer", "photoBttn");
                }
              }/>
            </section>

          </section>

        </section>
        <section className="about">
          <section className="home-inner">
            <h1>About Me</h1>
            <p>
              Hello! I’m Christopher Lindor a Designer, self taught Web Developher and Photographer with over 6 years of exprience. I started out editing pictures in photoshop, and editing myspace profile templates in highschool which fueled my love for the web. I became intersted in photography as another creative outlet and now I never leave home with out a camera.
            </p>
            <p>
              See my <Link to="/work"> work <Fa iconClass="fa-pencil-square-o"/> <Fa iconClass="fa-code"/>  </Link> and check out some of my <Link to="/photo">photography <Fa iconClass="fa-camera"/>  </Link>
            </p>
          </section>
        </section>

      </div>
    )
  }
}

export default Home;
