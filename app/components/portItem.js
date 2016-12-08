import React from 'react';
import portData from './portData';



class portItem extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   projects: portData
    // }
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

    return (
      <div>
        <section className="project-intro">
          <img src={currentPortItem.thumbImg} alt="" className="intro-img"/>
          <p className="intro-copy">
            <span className="project-intro-bold">{currentPortItem.title}</span>{currentPortItem.intro}
          </p>
        </section>
      </div>
    )
  }
}

export default portItem;
