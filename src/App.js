import React from 'react'
import HelloWorld from './components/HelloWorld';
import LangSelector from './components/LangSelector';
import ReactExample from './components/ReactExample';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <React.Fragment>
      <h3>Implement multi-languages in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <LangSelector />
      <div className="app">
        <HelloWorld />
        <ReactExample />
        <ThankYou />
      </div>
    </React.Fragment>
  );
}

export default App;
