import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAttribute } from '../store/sliceFilter';

function Attribute() {
  const dispatch = useDispatch();
  const { allCards } = useSelector((state) => state.cards);
  const { attribute } = useSelector((state) => state.filters);
  const attributes = Array.from(
    new Set(
      allCards
        .map((card) => card.attribute)
        .filter((attribute) => attribute !== undefined)
        .sort(),
    ),
  );

  return (
    <div>
      <label>Attribute</label>
      <select
        className="border-white border px-2 rounded-md block w-full"
        value={attribute}
        onChange={({ target }) => dispatch(filterAttribute(target.value))}
      >
        <option value={''}>All</option>
        {attributes.map((attribute) => (
          <option key={attribute} value={attribute}>
            {capitalize(attribute)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Attribute;

function capitalize(word) {
  const capitalizedWord =
    word[0].toUpperCase() + word.substring(1).toLowerCase();
  return capitalizedWord;
}
