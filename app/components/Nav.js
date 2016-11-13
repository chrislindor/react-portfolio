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
      navVis: "nav-links nav-hidden",
      logoStyle: "logo",
      buttonColor: "nav-open"
    }
  }
  navClick(){
    if (this.state.buttonStyle === Bars ) {
      this.setState({
        buttonStyle: CloseIcon,
        navVis: "nav-links light-style" ,
        logoStyle: "logo light-style",
        buttonColor: "nav-open light-style"
      })
    } else {
      this.setState({
        buttonStyle: Bars,
        navVis: "nav-links nav-hidden",
        logoStyle: "logo",
        buttonColor: "nav-open"
      })
    }
  }

  render() {
    return (
      <div className="site-root">
        <header>
          <section className={this.state.logoStyle}>
            <Link to="/" >Christopher Lindor</Link>
          </section>
          <button className={this.state.buttonColor} onClick={this.navClick}>
            {this.state.buttonStyle}
          </button>
        </header>
        <nav className={this.state.navVis}>
            <ul>
              <li>
                <Link to="/work" onClick={this.navClick}>Design</Link>
              </li>
              <li>
                <Link to="/work" onClick={this.navClick}>Development</Link>
              </li>
              <li>
                <Link to="/photo" onClick={this.navClick}>Photography</Link>
              </li>
              <li>
                <section className="social-section">
                  <a href="#"><Fa icon="fa fa-instagram social-button" /></a>
                  <a href="#"><Fa icon="fa fa-github social-button" /></a>
                  <a href="#"><Fa icon="fa fa-linkedin social-button" /></a>
                  <section className="email">
                      <a href="#">chrislindor@gmail.com</a>
                  </section>

                </section>
              </li>
            </ul>

        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default Nav;
