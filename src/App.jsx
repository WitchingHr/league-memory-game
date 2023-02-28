import './App.css';
import { useState, createContext } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export const Context = createContext(null);

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Context.Provider value={{score, setScore, bestScore, setBestScore}}>
        <Header />
        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
