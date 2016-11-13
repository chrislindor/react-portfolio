import React from 'react';
import { Link } from 'react-router'
import portData from './portData';

// Work component

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: portData,
    }
  }

  render() {
    let projects = this.state.projects.map((project) => {
      return(
        <li className="projects" key={project.key}>
          <figure>
            <Link to={`work/${project.tittle}`}><img src={project.thumbImg} alt=""/></Link>
            <figcaption>
              <h2> <Link to={`work/${project.tittle}`}>{project.tittle}</Link> </h2>
              <h3>{project.category}</h3>
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
            <li>All</li>
            <li>Design</li>
            <li>Development</li>
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
