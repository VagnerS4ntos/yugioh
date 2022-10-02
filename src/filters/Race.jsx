import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterRace } from '../store/sliceFilter';

function Race() {
  const dispatch = useDispatch();
  const { allCards } = useSelector((state) => state.cards);
  const { race } = useSelector((state) => state.filters);
  const races = Array.from(
    new Set(
      allCards
        .map((card) => card.race)
        .filter((race) => race !== '')
        .sort(),
    ),
  );

  return (
    <div>
      <label>Race</label>
      <select
        className="border-white border px-2 rounded-md block w-full"
        value={race}
        onChange={({ target }) => dispatch(filterRace(target.value))}
      >
        <option value={''}>All</option>
        {races.map((race) => (
          <option key={race} value={race}>
            {race}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Race;
