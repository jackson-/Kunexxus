
import ProjectList from './ProjectList';
import { Link } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName:state.common.appName,
  projects:state.projects.projects
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: 'GET_PROJECTS' })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {

    console.log("HOME PROPS", this.props)
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
