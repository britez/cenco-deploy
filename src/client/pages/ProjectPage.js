import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../actions';
import Scope from '../components/Scope';

class Project extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.id);
  }

  renderScopes() {
    return this.props.project.scopes.map(scope => <Scope key={scope.id} scope={scope} />);
  }

  render() {
    if(!this.props.project) {
      return (<h6>Loading ...</h6>);
    }
    return (
    <div>
      <div id='project'>
        <h3>{this.props.project.name}</h3>
        <p>{this.props.project.description}</p>
        <div className='row'>
          <div className='col-md-6'>
          </div>
          <div className='col-md-6'>
            { this.renderScopes() }
          </div>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state, { match }) => ({ project: state.project, id: match.params.id });

export default {
  loadData: ({ dispatch }, { id }) => dispatch(fetchProject(id)),
  component: connect(mapStateToProps, { fetchProject })(Project)
};
