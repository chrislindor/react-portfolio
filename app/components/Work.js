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
    this.updateAllProj = this.updateAllProj.bind(this)
    this.updateDesignProj = this.updateDesignProj.bind(this)
    this.updateDevProj = this.updateDevProj.bind(this)
  }

  stripState() {
    this.setState({
      allProj: 'filter-bttn ',
      designProj: "filter-bttn",
      devProj: "filter-bttn"
    })
  }

  updateAllProj() {
    this.setState({
      allProj: "filter-bttn filter-bttn-active",
    })
  }

  updateDesignProj() {
    this.setState({
      designProj: "filter-bttn filter-bttn-active",
    })
  }

  updateDevProj() {
    this.setState({
      devProj: "filter-bttn filter-bttn-active",
    })
  }

  updateFilter(filter) {
    this.setState({
      projects: filter
    })
  }

  render() {
    // Retrive projects from port data object and generate thumbnails and project names.
    let projects = this.state.projects.map((data,index) => {
      return(
        <li className="projects" key={index}>
          <figure>
            <Link to={`work/${data.title}`}><img className="project-img" src={data.thumbImg} alt=""/></Link>
            <figcaption>
              <h2> <Link className="project-title" to={`work/${data.title}`}>{data.title}</Link> </h2>
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
                  this.updateFilter(portData);
                  this.stripState();
                  this.updateAllProj();
                }
              }>All</li>
              <li className={this.state.designProj} onClick={
                () => {
                  this.updateFilter(designData);
                  this.stripState();
                  this.updateDesignProj();
                }
              }>Design</li>
              <li className={this.state.devProj} onClick={
                () => {
                  this.updateFilter(devData);
                  this.stripState();
                  this.updateDevProj();
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
