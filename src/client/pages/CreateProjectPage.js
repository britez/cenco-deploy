import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import { Link } from 'react-router-dom';

class CreateProject extends React.Component {

  render() {
    return (
    <div className="container" id='create'>
      <h3>Create</h3>
    </div>);
  }
}

const mapStateToProps = (state) => ({});

export default {
  component: connect(mapStateToProps, { fetchProjects })(CreateProject)
};
