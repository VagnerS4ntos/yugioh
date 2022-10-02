import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterName } from '../store/sliceFilter';

function Name() {
  const { name } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        className="border-white border px-2 rounded-md block w-full"
        placeholder="Card name..."
        value={name}
        onChange={({ target }) => dispatch(filterName(target.value))}
      />
    </div>
  );
}

export default Name;
