import './styles/main.scss';
import logo from "./assets/images/logo.svg";
import Calculator from './components/Calculator';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {

  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)

  const onBillAmount = (billAmount) => {
      setBill(billAmount);
  }

  const onTipPercentage = (tipPercentage) => {
      setTip(tipPercentage);
  }
  
  const onNumberOfPeopleChange = (numberOfPeople) => {
      setPeople(numberOfPeople);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} alt="Logo Splitter" />
      </header>
      <div id="calculator">
             <Calculator
              handleBillAmountChange={onBillAmount}
              handleTipPercentageChange={onTipPercentage}
              handleNumberOfPeopleChange={onNumberOfPeopleChange} />
             <Results bill={bill} tip={tip} people={people} />
      </div>
    </div>
  );
}

export default App;
