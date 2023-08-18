import React from 'react';

const SearchInput = ({ onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Search products</label>
      <input
        type="text"
        className="form-control"
        onChange={onChange}
      />
    </div>
  )
}

export default SearchInput;