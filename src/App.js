import logo from './net2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Adam Beji's AWS Deployment</p>
        <br></br>
        <br></br>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://netcompany.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netcompany official website
        </a>
      </header>
    </div>
  );
}

export default App;
