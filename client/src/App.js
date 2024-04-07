import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [animals, setAnimals] = useState([]);
  const fetchData = async () => {
    const response = await fetch('/animals');
    const data = await response.json();
    setAnimals(data);
  };

  useEffect(() => {
    console.log('App is mounted')
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>
            Welcome to the Adoption Shelter
          </h1>
      </header>
      <main>
        <h2>
          Here are our animals:
        </h2>
        <ul>
          {/* {JSON.stringify(animals)} */}
          {animals.map((animal) => {
            return (
              <li key={animal.id}>{animal.name}</li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
