
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
      <footer>Coded by <a href="https://github.com/kelly-okeefe" target='_blank' rel="noreferrer">Kelly O'Keefe</a> 👩🏻‍🦰 Open-sourced <a href="https://github.com/kelly-okeefe/dictionary-project" target='_blank' rel="noreferrer">on GitHub</a>,   
       and hosted <a href="https://kellyokeefe-react-dictionary.netlify.app/" target='_blank' rel="noreferrer">on Netlify</a></footer>
      </div>
    </div>
  );
}

export default App;
