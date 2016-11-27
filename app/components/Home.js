import React from 'react';

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
      creativeStatus: 'Designer'
    }
    this.updateCreative = this.updateCreative.bind(this)
  }

  updateCreative(type,status) {
    console.log(type);
    this.setState({
      creativeType: type,
      creativeStatus: status
    })
  }

  render() {
    return (
      <div>
        <section className="home-display">
          <section className={`home-img ${this.state.creativeType}`}>

            <section className="home-ctrl">
              <p className="current-creative">{this.state.creativeStatus}</p>
              <button className="home-bttn" onClick={() => this.updateCreative("home-design", "Designer")}>
                <Fa iconClass="fa-pencil-square-o"></Fa>
              </button>
              <button className="home-bttn" onClick={() => this.updateCreative("home-dev", "Developer")}>
                <Fa iconClass="fa-code"></Fa>
              </button>
              <button className="home-bttn" onClick={() => this.updateCreative("home-photo", "Photographer")}>
                <Fa iconClass="fa-camera"></Fa>
              </button>
            </section>

          </section>

        </section>
        <section className="about">
          <p>About section</p>
        </section>

      </div>
    )
  }
}

export default Home;
