import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user:state.auth.user,
  title:state.projects.title,
  description:state.projects.description
})

const mapDispatchToProps = dispatch => ({
  onChangeTitle: value =>
    dispatch({ type: 'UPDATE_FIELD_PROJECT', key: 'title', value }),
  onChangeDescripion: value =>
    dispatch({ type: 'UPDATE_FIELD_PROJECT', key: 'description', value }),
  onSubmit: (title, description, email) => {
    dispatch({ type: 'CREATE_PROJECT', payload: {title:title, description:description, email:email}})
  }
});

class ProjectsCreate extends React.Component {
  constructor() {
    super();
    this.changeTitle = ev => this.props.onChangeTitle(ev.target.value);
    this.changeDescription = ev => this.props.onChangeDescripion(ev.target.value);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event){
    event.preventDefault();
    this.props.onSubmit(this.props.title, this.props.description, localStorage.getItem('email'))
  }

  render() {
    const title = this.props.title || '';
    const description = this.props.description || '';
    return (
      <div className="home-page">
        <div className="container page">
          <h1>Create New Project</h1>
          <form onSubmit={this.submitForm}>
            <label>Title</label>
            <input
              type='text' name='title'
              value={title}
              onChange={this.changeTitle}
               />
            <label>Description</label>
            <input type='text' name='description'
              value={description}
              onChange={this.changeDescription}
            />
            <input type='submit'/>
          </form>
        </div>

      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsCreate);
