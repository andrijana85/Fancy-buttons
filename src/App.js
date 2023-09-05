import './App.css';
import LightSwitchButton from './components/LightSwitchButton';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import TextRepeaterButton from './components/TextRepeaterButton'; 


function App() {
  return (
    <div className="App">
      <h1><span>Fancy Buttons!</span></h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
