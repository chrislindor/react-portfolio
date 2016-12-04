import React from 'react';
import { Link } from 'react-router'

let Bars = <i className="fa fa-bars" aria-hidden="true"></i>;

let CloseIcon = <i className="fa fa-times" aria-hidden="true"></i>;

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
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
        logoStyle: "logo logo-hidden",
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
            <Link to="/">Christopher Lindor</Link>
          </section>
          <button className={this.state.buttonColor} onClick={this.navClick}>
            {this.state.buttonStyle}
          </button>
        </header>
        <nav className={this.state.navVis}>
            <ul>
              <li>
                <Link to="/" onClick={this.navClick}>C.L.</Link>
              </li>
              <li>
                <Link to="/work" onClick={this.navClick}><Fa iconClass="fa-pencil-square-o"/> <Fa iconClass="fa-code"/> Work</Link>
              </li>
              <li>
                <Link to="/photo" onClick={this.navClick}><Fa iconClass="fa-camera"/> Photography</Link>
              </li>
              <li>
                <section className="social-section">
                  <a href="https://www.instagram.com/ftm_chris/" target="_blank" ><Fa iconClass="fa-instagram social-button" /></a>
                  <a href="https://github.com/chrislindor" target="_blank" ><Fa iconClass="fa-github social-button" /></a>
                  <a href="https://www.linkedin.com/in/chrislindor" target="_blank" ><Fa iconClass="fa-linkedin social-button" /></a>
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
