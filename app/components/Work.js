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
      allProj: "filter-bttn filter-bttn-active",
      designProj: "filter-bttn",
      devProj: "filter-bttn"
    },
    this.updateFilter = this.updateFilter.bind(this)
    this.stripState = this.stripState.bind(this)
  }

  stripState() {
    this.setState({
      allProj: 'filter-bttn ',
      designProj: "filter-bttn",
      devProj: "filter-bttn"
    })
  }


  // filter function with a default param of ' All = portData'
  updateFilter(filter, stateToChange) {
    this.stripState();
    this.setState({
      projects: filter,
      [stateToChange]: "filter-bttn filter-bttn-active"

    })
  }

  render() {
    // Retrive projects from port data object and generate thumbnails and project names.
    let projects = this.state.projects.map((data,index) => {
      return(
        <li className="projects" key={index}>
          <figure>
            <Link to={`work/${data.url}`}><img className="project-img" src={data.thumbImg} alt=""/></Link>
            <figcaption>
              <h2> <Link className="project-title" to={`work/${data.url}`}>{data.title}</Link> </h2>
              <h3 className="project-cat">{data.category}</h3>
            </figcaption>
          </figure>
        </li>
      )
    })


    return (
      <div>
        <section className="work">
          <section className="work-header">
            <h1>Work</h1>
            <ul className="work-nav">
              <li className={this.state.allProj} onClick={
                () => {
                  this.updateFilter(portData, "allProj");
                }
              }>All</li>
              <li className={this.state.designProj} onClick={
                () => {
                  this.updateFilter(designData, "designProj");
                }
              }>Design</li>
              <li className={this.state.devProj} onClick={
                () => {
                  this.updateFilter(devData, "devProj");
                }
              }>Development</li>
            </ul>
          </section>
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
