import React from 'react';
import { Link } from 'react-router'

let Bars = <i className="fa fa-bars" aria-hidden="true"></i>;
let CloseIcon = <i className="fa fa-times" aria-hidden="true"></i>;

const Fa = (props) => {
  return <i className={props.icon} aria-hidden="true"></i>
};

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.navClick = this.navClick.bind(this)
    this.state = {
      buttonStyle: Bars,
      navVis: "nav-links nav-hidden"
    }
  }
  navClick(){
    if (this.state.buttonStyle === Bars ) {
      this.setState({
        buttonStyle: CloseIcon,
        navVis: "nav-links"
      })
    } else {
      this.setState({
        buttonStyle: Bars,
        navVis: "nav-links nav-hidden"
      })
    }
  }

  render() {
    return (
      <div className="site-root">
        <header>
          <section className="logo">
            <Link to="/">Christopher Lindor</Link>
          </section>
          <button className="nav-controller" onClick={this.navClick}>
            {this.state.buttonStyle}
          </button>
          <nav className={this.state.navVis}>

            <ul>
              <li>
                <Link to="/work">Design</Link>
              </li>
              <li>
                <Link to="/work">Development</Link>
              </li>
              <li>
                <Link to="/photo">Photography</Link>
              </li>
            </ul>
            <section className="social-section">
              <a href="#"><Fa icon="fa fa-instagram" /></a>
              <a href="#"><Fa icon="fa fa-github" /></a>
              <a href="#"><Fa icon="fa fa-linkedin" /></a>
            </section>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default Nav;
