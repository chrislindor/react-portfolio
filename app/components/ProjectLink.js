import React from 'react';
import { Link } from 'react-router'

class ProjectLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="projects" >
        <figure>
          <Link to={`work/${this.props.projectUrl}`}><img className="project-img" src={this.props.thumbImg} alt=""/></Link>
          <figcaption>
            <h2 className='proj-h2'> <Link className="project-title" to={`work/${this.props.projectUrl}`}>{this.props.projectTitle}</Link> </h2>
            <h3 className="project-cat">{this.props.projectCat}</h3>
          </figcaption>
        </figure>
      </li>
    )
  }
}

ProjectLink.propTypes = {
    projectUrl: React.PropTypes.string.isRequired,
    thumbImg: React.PropTypes.string.isRequired,
    projectTitle: React.PropTypes.string.isRequired,
    projectCat: React.PropTypes.string.isRequired
}

export default ProjectLink
