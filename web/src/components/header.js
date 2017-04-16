import { Link } from 'react-router';
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  appName:state.common.appName
})

class Header extends React.Component {
  render() {
    let token = localStorage.getItem('token')
    const address = token ? "/" : "/login";
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to={address} className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
          { token  &&
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Projects
                </Link>
              </li>
          }
          { !token  &&
            <li className="nav-item">
              <Link to="login" className="nav-link">
                Sign in
              </Link>
            </li>
          }

          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(Header);
