
import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <main>
        <h1>Dictionary</h1>
        <Dictionary defaultKeyword = "sunset"/>
      </main>
      <footer>Coded by Kelly O'Keefe open-sourced <a href="https://github.com/kelly-okeefe/dictionary-project">on GitHub</a> and hosted on Netlify</footer>
      </div>
    </div>
  );
}

export default App;
