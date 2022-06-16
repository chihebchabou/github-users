import React, { useState } from 'react';

const Search = props => {
  const [text, setText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.handleSubmit(text);
    setText('');
  };

  const handleChange = event => setText(event.target.value);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search Users..."
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-dark" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
