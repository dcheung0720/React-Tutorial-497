import { Link } from 'react-router-dom';
import { useFormData } from './utilities/useFormData';


const validateUserData = (key, val) => {
  switch (key) {
    case 'Title':
      return /(^\w\w)/.test(val) ? '' : 'Must be least two characters';
    case 'Meeting Times':
      return /^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/.test(val) ? '' : 'Must be in the following format: days HH:MM - HH:MM ie. MWF 10:00 - 11:20';
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => {
  return(
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div style = {{color: "red"}}>{state.errors?.[name]}</div>
  </div>)
};
  
  const ButtonBar = ({message, disabled}) => {
    return (
      <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2">Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
        <span className="p-2">{message}</span>
      </div>
    );
  };
  
  const UserEditor = (courses, selected) => {
    const submit = (evt) => {
      evt.preventDefault();
    };

    const [state, change] = useFormData(validateUserData)
  
    return (
      <form onSubmit={submit}>
        <InputField name="Title" text="Title" state = {state} change = {change} />
        <InputField name="Meeting Times"  text="Meeting Times" state = {state} change = {change} />
        <Link to = "/"> Cancel</Link>
      </form>
    )
  };
  
  export default UserEditor;