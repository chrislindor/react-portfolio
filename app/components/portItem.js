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
      if (data[i].tittle === this.props.routeParams.portItemName) {
        currentPortItem = data[i];
      }
    }
    return currentPortItem;
  }

  render() {
    let currentPortItem = this.getPortItem(portData);

    return (
      <div>
        <h1>{currentPortItem.tittle}</h1>
        <p>{currentPortItem.category}</p>
      </div>
    )
  }
}

export default portItem;
