import Card from './components/card/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [ listPerson, setListPerson] = useState([])
 
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    fetch('https://hp-api.herokuapp.com/api/characters/students')
    .then((response) => response.json())
    .then((response) => setListPerson(response))

    setShowCard(true);
  },[])

  console.log(listPerson)

  return (
    <div className="App-header">
    {showCard && <Card listPerson = {listPerson}/> }
    </div>
  );
}

export default App;
