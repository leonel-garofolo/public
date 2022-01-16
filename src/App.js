import './App.css';
import Main from './layout/Main';
import Menu from './layout/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Main />
      </header>
    </div>
  );
}

export default App;
