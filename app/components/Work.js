import React from 'react';
import { Link } from 'react-router'
import portData from './portData';

// Work component

// function to filter array and return array of data based on supplied category argument.
let filterData = (array, filter) => {
  let newArray = [];
  for (let i =0; i < array.length; i++){
    if (array[i].category === filter) {
      newArray.push(array[i]);
    }
  }
  return newArray
}

// Setting up data sets for filter to be passed as states
const designData = filterData(portData, "Design");
const devData = filterData(portData, "Development");

// Work class begins
class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: portData,
    },
    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter(filter) {
    this.setState({
      projects: filter
    })
  }

  render() {
    let projects = this.state.projects.map((data,index) => {
      return(
        <li className="projects" key={index}>
          <figure>
            <Link to={`work/${data.tittle}`}><img src={data.thumbImg} alt=""/></Link>
            <figcaption>
              <h2> <Link to={`work/${data.tittle}`}>{data.tittle}</Link> </h2>
              <h3>{data.category}</h3>
            </figcaption>
          </figure>
        </li>
      )
    })
    return (
      <div>
        <section className="work-head">
          <h1>Work</h1>
          <ul className="work-nav">
            <li><button onClick={() => this.updateFilter(portData)}>All</button></li>
            <li><button onClick={() => this.updateFilter(designData)}>Design</button></li>
            <li><button onClick={() => this.updateFilter(devData)}>Development</button></li>
          </ul>
        </section>
        <section className="project-display">
          <ul>
            {projects}
          </ul>
        </section>
      </div>
    )
  }
}

export default Work;
