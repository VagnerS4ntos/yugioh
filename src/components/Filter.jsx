import React from 'react';
import Name from '../filters/Name';
import Type from '../filters/Type';
import Race from '../filters/Race';
import Level from '../filters/Level';
import Attribute from '../filters/Attribute';
import { useDispatch, useSelector } from 'react-redux';
import { fiterCards, changePageActive } from '../store/sliceCards';
import {
  filterName,
  filterType,
  filterRace,
  filterAttribute,
  filterLevel,
  handleFilter,
} from '../store/sliceFilter';

function Filter() {
  const dispatch = useDispatch();
  const { name, type, race, attribute, level, openFilter } = useSelector(
    (state) => state.filters,
  );
  const { allCards } = useSelector((state) => state.cards);

  function filter(event) {
    event.preventDefault();
    const filteredCards = allCards.filter((card) => {
      const search = [name, type, race, attribute, level];
      const values = [
        card.name,
        card.type,
        card.race,
        card.attribute,
        card.level,
      ];
      let flag = true;
      for (let i in search) {
        if (search[i] !== name && search[i] !== level) {
          if (values[i] !== search[i] && search[i] !== '') {
            flag = false;
          }
        } else if (search[i] === name && search[i] !== level) {
          if (!values[i]?.toLowerCase().includes(search[i].toLowerCase())) {
            flag = false;
          }
        } else if (search[i] === level) {
          if (values[i] !== Number(search[i]) && search[i] !== '') {
            flag = false;
          }
        }
      }
      if (flag) return card;
    });
    dispatch(fiterCards(filteredCards));
    dispatch(changePageActive(0));
  }

  function clearFilter(event) {
    event.preventDefault();
    dispatch(filterName(''));
    dispatch(filterType(''));
    dispatch(filterRace(''));
    dispatch(filterAttribute(''));
    dispatch(filterLevel(''));
    dispatch(fiterCards(allCards));
    dispatch(changePageActive(0));
  }

  return (
    <section className="container mb-10">
      <button
        className="bg-red-400 hover:bg-red-500 active:bg-red-600 px-2 py-1 rounded-md uppercase mb-2"
        onClick={() => dispatch(handleFilter(!openFilter))}
      >
        {openFilter ? 'Close filter' : 'Open filter'}
      </button>
      {openFilter && (
        <form>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-5">
            <Name />
            <Type />
            <Race />
            <Attribute />
            <Level />
          </div>
          <div className="mt-5 flex gap-2">
            <button
              className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 px-2 py-1 rounded-md uppercase"
              onClick={filter}
            >
              Apply
            </button>
            <button
              className="bg-orange-400 hover:bg-orange-500 active:bg-orange-600 px-2 py-1 rounded-md uppercase"
              onClick={clearFilter}
            >
              Clear filter
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Filter;
