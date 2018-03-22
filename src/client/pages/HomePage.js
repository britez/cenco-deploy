  import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  componentDidMount() {
    if(!this.props.projects) {
      this.props.fetchProjects();
    }
  }

  renderProjects() {
    return this.props.projects.map(project =>
      <Link to={`/projects/${project.id}`} key={project.id} href='#' className='list-group-item list-group-item-action flex-column align-items-start'>
        <div className='d-flex w-100 justify-content-between'>
          <h6 className='mb-1'>{project.name}</h6>
        </div>
        <p className='mb-1'>{project.description}</p>
        <span className="oi oi-eye"></span>
      </Link>);
  }

  render() {
    if(!this.props.projects) {
      return <h6>Loading ...</h6>;
    }

/*
    <div>
      <input type="text" className="form-control" placeholder="Busca un proyecto..." />
      <span className="oi oi-magnifying-glass"></span>
    </div>
    <Link to={'/projects/create'}>
      <button type="button" class="btn btn-dark">
        <span className="oi oi-plus"></span>
      </button>
    </Link>
*/

    return (
    <div className="container" id='home'>
      <h3>Proyectos</h3>
      <div className='offset-md-3 col-md-6'>
        <div className='list-group'>
          <div className='list-group-item align-items-start search'>
            <div>
              <input type="text" className="form-control" placeholder="Busca un proyecto..." />
              <span className="oi oi-magnifying-glass"></span>
            </div>
            <div>
              <Link to={'/create-project'}>
                <button type="button" className="btn btn-dark">
                  <span className="oi oi-plus"></span>
                </button>
              </Link>
            </div>
          </div>
          {this.renderProjects()}
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default {
  loadData: ({ dispatch }) => dispatch(fetchProjects()),
  component: connect(mapStateToProps, { fetchProjects })(Home)
};
