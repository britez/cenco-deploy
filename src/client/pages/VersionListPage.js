import React from 'react';
import { connect } from 'react-redux';

class Version extends React.Component {
  render() {
    return (
    <div>
      <div id='version'>
        <h3>Versiones</h3>
        <div className='row'>
          <div className='col-md-12'>
          </div>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => ({});

export default {
  component: connect(mapStateToProps, {})(Version)
};
