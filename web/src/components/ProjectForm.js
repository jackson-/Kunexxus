
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

class ProjectForm extends React.Component {
  componentWillMount() {
    this.props.onLoad();
  }



  render() {

    return (
      <div className="form">
        <label for='title'>Title</label>
        <input type='text' name='title'/>
        <label for='description'>Description:</label>
        <input type='text' name='description'/>
        <input onClick={} type="submit" />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
