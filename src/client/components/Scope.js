import React from 'react';

const Scope = ({ scope }) => {
  return (
    <div className='scope col-md-12'>
      <div className='scope-wrapper bg-light'>
        <h6>{scope.name} <span className="oi oi-link-intact"></span></h6>
        <span className='version bg-dark'>{scope.version}</span>
      </div>
    </div>
  );
};

export default Scope;
