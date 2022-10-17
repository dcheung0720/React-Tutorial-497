import { Link, useParams,useLocation } from 'react-router-dom';
import { useFormData } from './utilities/useFormData';
import { useDbUpdate } from './utilities/firebase';


const validateUserData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'Must be least two characters';
    case 'meets':
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
        <button type="button" className="btn btn-outline-dark me-2"> <Link to = "/"> Cancel</Link></button>
        <button type="submit" className="btn btn-primary me-auto">Submit</button>
        <span className="p-2">{message}</span>
      </div>
    );
  };
  
  const UserEditor = () => {

    const {id} = useParams();
    console.log(id)
    const [update, result] = useDbUpdate(`courses/${id}`)
    const [state, change] = useFormData(validateUserData)

    const submit = (evt) => {
      evt.preventDefault();
      if(!state.errors && state.values !== undefined){
          update(state.values);
      }
    };

  
    return (
      <form onSubmit={submit}>
        <InputField name="title" text="Title" state = {state} change = {change} />
        <InputField name="meets"  text="Meeting Times" state = {state} change = {change} />
        <ButtonBar message={result?.message} />
      </form>
    )
  };
  
  export default UserEditor;