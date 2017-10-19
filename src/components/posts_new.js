import React,{ Component } from 'react';
import { Field,reduxForm} from 'redux-form';


class PostsNew extends Component {

  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type = "text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )

  }


  render(){
    return(
      <form>
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
})(PostsNew)
