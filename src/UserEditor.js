import { Link } from 'react-router-dom';
const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className="form-control" id={name} name={name} />
      <div className="invalid-feedback"></div>
    </div>
  );
  
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
  
    return (
      <form onSubmit={submit}>
        <InputField name="title" text="Title" />
        <InputField name="meetingTimes" text="Meeting Times"  />
        <Link to = "/"> Cancel</Link>
      </form>
    )
  };
  
  export default UserEditor;