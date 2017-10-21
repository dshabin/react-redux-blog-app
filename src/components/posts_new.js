import React,{ Component } from 'react';
import { Field,reduxForm} from 'redux-form';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/app'


class PostsNew extends Component {

  renderField(field){
    //distructered object and nested objects
    const {meta : {touched , error } } = field;
    const className= `form-group ${ touched && error ? 'has-danger' : '' }`;


    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type = "text"
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : ''}
        </div>
      </div>
    )

  }

  onSubmit(values){
    //route gives us some helpers using props like history
    //passing a callback function
    this.props.createPost(values , () => {
      this.props.history.push('/');
    })
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name = "title"
          label = "Title"
          component = { this.renderField }
        />
        <Field
          name = "tags"
          label = "Tags"
          component = { this.renderField }
        />
        <Field
          name = "content"
          label = "Content"
          component = { this.renderField }
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to ="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values){
  const errors = {}
  if (!values.title || values.title.length < 3){
    errors.title = "Enter a title";
  }
  if (!values.tags){
    errors.tags = "tag error";
  }
  if (!values.content){
    errors.content = "content error";
  }

  //if errors is empty the form is fine to submit
  //if errors  has any properties redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate ,
  form : 'PostsNewForm'
})(
  connect(null,{createPost})(PostsNew)
);
