import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cards() {
  const { allCards, loading, error } = useSelector((state) => state.cards);

  const [pageNumber, setPageNumber] = React.useState(0);
  const cardsPerPage = 30;
  const pagesVisited = pageNumber * cardsPerPage;

  const cardsOnScreen = allCards.slice(
    pagesVisited,
    pagesVisited + cardsPerPage,
  );

  const pageCount = Math.ceil(allCards.length / cardsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (error)
    return (
      <main className="container mt-10">
        <h1>{error}</h1>
      </main>
    );

  return (
    <>
      {loading ? (
        <main className="container mt-10">
          <h1>Carregando...</h1>
        </main>
      ) : (
        <main className="container mt-10 flex flex-col justify-between min-h-screen">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-10 justify-items-center">
            {cardsOnScreen.map((card) => (
              <div className="w-fit cursor-pointer" key={card.id}>
                <Link to={`/card/${card.id}`}>
                  <img
                    src="/card.jpg"
                    alt={card.name}
                    className="w-36"
                    onLoad={({ target }) =>
                      (target.src = card.card_images[0].image_url)
                    }
                  />
                </Link>
              </div>
            ))}
          </section>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationContainer"
            activeClassName="paginationActive"
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
          />
        </main>
      )}
    </>
  );
}

export default Cards;
