import React from 'react';
import axios from 'axios';
import Header from './components/Header';

function App() {
  const [allCards, setAllCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getAllCards() {
      const { data } = await axios.get(
        'https://db.ygoprodeck.com/api/v7/cardinfo.php',
      );
      setAllCards(data.data);
      // console.log(data.data[0]);
      setLoading(false);
    }
    getAllCards();
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        {loading ? (
          <h1>Carregando</h1>
        ) : (
          <>
            <section>
              {allCards.map((card) => (
                <div>
                  <h2>{card.name}</h2>
                </div>
              ))}
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default App;
