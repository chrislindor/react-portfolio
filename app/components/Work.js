import React from 'react';
import { Link } from 'react-router';
import portData from './portData';
import ProjectLink from './ProjectLink'

// Work component

// function to filter array and return array of data based on supplied category argument.
// let filterData = (array, filter) => {
//   let newArray = [];
//   for (let i =0; i < array.length; i++){
//     if (array[i].category === filter) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray
// }

// Setting up data sets for filter to be passed as states

// const designData = filterData(portData, "Design");
const designData = portData.filter(data => data.category === 'Design');
// const devData = filterData(portData, "Development");
const devData = portData.filter(data => data.category === 'Development');

// Work class begins
class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: portData,
      allProj: "filter-bttn-active",
      designProj: "",
      devProj: ""
    },
    this.updateFilter = this.updateFilter.bind(this)
    this.stripState = this.stripState.bind(this)
  }

  stripState() {
    this.setState({
      allProj: '',
      designProj: "",
      devProj: ""
    })
  }


  // filter function with a default param of ' All = portData'
  updateFilter(filter, stateToChange) {
    this.stripState();
    this.setState({
      projects: filter,
      [stateToChange]: "filter-bttn-active"

    })
  }

  render() {
    // Retrive projects from port data object and generate thumbnails and project names.
    let projects = this.state.projects.map((data,index) => {
      return(
        <ProjectLink
          key={index}
          projectUrl={data.url}
          thumbImg={data.thumbImg}
          projectTitle={data.title}
          projectCat={data.category}
        />
      )
    })


    return (
      <div>
        <section className="work">
          <section className="work-header">
            <h1>Work</h1>
            <ul className="work-nav">
              <li className='filter-bttn' onClick={
                () => {
                  this.updateFilter(portData, "allProj");
                }
              }> <span className={this.state.allProj}>All</span></li>
              <li className='filter-bttn' onClick={
                () => {
                  this.updateFilter(designData, "designProj");
                }
              }><span className={this.state.designProj}>Design</span></li>
              <li className='filter-bttn' onClick={
                () => {
                  this.updateFilter(devData, "devProj");
                }
              }><span className={this.state.devProj}>Development</span></li>
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
