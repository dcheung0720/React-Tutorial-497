import {useState} from "react";

  const MenuButton = ({term, selection, setSelection}) => (
    <div style = {{marginLeft : "10px"}}>
      <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
        onChange={() => setSelection(term)} />
      <label className="btn btn-success mb-1 p-2" htmlFor={term}>
      { term }
      </label>
    </div>
  );
  
  const MenuSelector = ({terms, selection, setSelection}) => (
    <div className="btn-group">
      { 
        terms.map(term => <MenuButton key={term} term={term} selection={selection} setSelection={setSelection} />)
      }
    </div>
  );
  
  const Menu = ({terms, selection}) => (
    <div className="card" >
    { terms[selection] }
    </div>
  );
  
  const MenuPage = ({terms, selection, setSelection}) => {
    return (
      <div>
        <MenuSelector terms = {terms} selection={selection} setSelection={setSelection} />
        <Menu terms = {terms} selection={selection} />
      </div>
    );
  }
  
  export default MenuPage;