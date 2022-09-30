import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CardDetails() {
  const { allCards } = useSelector((state) => state.cards);
  const { id } = useParams();
  const filterCard = allCards.filter(
    (card) => card.id.toString() === id.toString(),
  );
  console.log(filterCard);

  return (
    <main className="container mt-10">
      {filterCard.map((card) => (
        <section className="flex flex-col sm:flex-row gap-5">
          <img
            src={card.card_images[0].image_url}
            alt={card.name}
            className="w-64"
          />
          <ul>
            <li>
              <span className="font-bold">Name: </span>
              {card.name}
            </li>
            {card.atk !== undefined && (
              <li>
                <span className="font-bold">Attack</span>: {card.atk}
              </li>
            )}
            {card.def !== undefined && (
              <li>
                <span className="font-bold">Defense</span>: {card.def}
              </li>
            )}
            {card.type && (
              <li>
                <span className="font-bold">Type: </span>
                {card.type}
              </li>
            )}
            {card.race && (
              <li>
                <span className="font-bold">Race:</span> {card.race}
              </li>
            )}
            {card.attribute && (
              <li>
                <span className="font-bold">Attribute:</span> {card.attribute}
              </li>
            )}
            {card.archetype && (
              <li>
                <span className="font-bold">Archetype:</span> {card.archetype}
              </li>
            )}
            {card.level !== undefined && (
              <li>
                <span className="font-bold">Level:</span> {card.level}
              </li>
            )}
            {card.scale !== undefined && (
              <li>
                <span className="font-bold">Scale:</span> {card.scale}
              </li>
            )}
            {card.linkval !== undefined && (
              <li>
                <span className="font-bold">Link value:</span> {card.linkval}
              </li>
            )}
            {card.desc && (
              <li>
                <span className="font-bold">Description:</span> {card.desc}
              </li>
            )}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default CardDetails;
