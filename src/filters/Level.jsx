import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterLevel } from '../store/sliceFilter';

function Level() {
  const dispatch = useDispatch();
  const { allCards } = useSelector((state) => state.cards);
  const { level } = useSelector((state) => state.filters);
  const levels = Array.from(
    new Set(
      allCards
        .map((card) => card.level)
        .filter((level) => level !== undefined)
        .sort((a, b) => a - b),
    ),
  );

  return (
    <div>
      <label>Level</label>
      <select
        className="border-white border px-2 rounded-md block w-full"
        value={level}
        onChange={({ target }) => dispatch(filterLevel(target.value))}
      >
        <option value={''}>All</option>
        {levels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Level;
