import logo from './logo.svg';
import './App.css';

const book = {
  title: 'harry potter and the chamber of secrets',
  author: 'J.k Rowling',
  published: '2007',
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cavalierhousebooks.com%2Fbook%2F9780756903169&psig=AOvVaw0A_7TV6bXzyi3nRJXeWilm&ust=1711726846668000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiru8ill4UDFQAAAAAdAAAAABAD',
  width: '264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
      className="bookCover"
      src={book.image}
      alt={book.title + 'cover'}
      style={{
        width: book.width,
        height: book.height
      }}
      />
    </div>
  );
}

function MagicButton() {
  return (
    <div>
      <h3>This is a magic button</h3>
    <button>Magic</button>
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
