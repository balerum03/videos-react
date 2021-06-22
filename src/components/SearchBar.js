import React, { useState } from 'react';

const SearchBar = (props) => {
  
  const [term, setTerm] = useState('');

  const changeHandler = (e) => {
    setTerm(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onTermSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label>Video Search</label>
          <input type="text"
          value={term}
          onChange={changeHandler} />
        </div>
      </form>
    </div>
  )
};

export default SearchBar;