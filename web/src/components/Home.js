
import ProjectList from './ProjectList';
import { Link } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import store from '../store'
import agent from '../agent';

const mapStateToProps = state => ({
  appName:state.common.appName,
  projects:state.home.projects
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    agent.Projects.all().then(data => {
      dispatch({ type: 'GET_PROJECTS', data: data.projects })
    })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad();
    // store.dispatch({ type: 'GET_PROJECTS' })
  }

  render() {

    return (
      <div className="home-page">
        <div className="container page">
          <Link to='/projects/create' className="navbar-brand">
            Create New Project
          </Link>
          <div className="row">
            <ProjectList projects={this.props.projects}/>
          </div>
        </div>

      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
