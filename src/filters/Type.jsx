import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterType } from '../store/sliceFilter';

function Type() {
  const dispatch = useDispatch();
  const { allCards } = useSelector((state) => state.cards);
  const { type } = useSelector((state) => state.filters);
  const types = Array.from(new Set(allCards.map((card) => card.type).sort()));

  return (
    <div>
      <label>Type</label>
      <select
        className="border-white border px-2 rounded-md block w-full"
        value={type}
        onChange={({ target }) => dispatch(filterType(target.value))}
      >
        <option value={''}>All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Type;
