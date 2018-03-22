import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { toggled: false, id: props.match.params.id };
  }

  toggleMenu() { this.setState({toggled: !this.state.toggled}); }

  render () {
    return (
      <div id="nav">
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
          <a className="navbar-brand" onClick={this.toggleMenu} href="#">
            <span className="oi oi-menu"></span>
          </a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className={`bg-light sidebar ${this.state.toggled ? 'toggled col-md-2' : ''} pt-3 px-4`}>
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>
                      <span className="oi oi-home"></span> Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/projects/${this.state.id}`}>
                      <span className="oi oi-dashboard"></span> Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/projects/${this.state.id}/versions`}>
                      <span className="oi oi-code"></span> Versiones
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/projects/${this.state.id}/scopes`}>
                      Scopes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/projects/${this.state.id}/features`}>
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/projects/${this.state.id}/hotfixes`}>
                      Hotfixes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/projects/${this.state.id}/deploys`}>
                      Deploys
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className={`${this.state.toggled ? 'col-md-10' : 'col-md-12'} pt-3 px-4`}>
              {renderRoutes(this.props.route.routes)}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default {
  component: Nav,
};
