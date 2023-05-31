import './App.css';
import { useState } from 'react';
import { carsList } from './data';
import { Button } from '@mui/material';


function App() {
  const [car, setCar] = useState(0);

  function handlePreviousClick() {
    if (car > 0) { setCar(car - 1) }
    else { setCar(0) }
  }

  function handleNextClick() {
    if (car < 3) { setCar(car + 1) }
    else { setCar(3) }
  }

  let cars = carsList[car];

  return (
    <>
      <div className='app'>
        <h1>Moje dotychczasowe auta:</h1>
        <Button
          variant="contained"
          size="small"
          onClick={handlePreviousClick}
          disabled={car < 1}
        >Starsze</Button>
        <Button
          variant="contained"
          size="small"
          onClick={handleNextClick}
          disabled={car > 2}
        >Nowsze</Button>


        <h2>Marka: {cars.brand}</h2>
        <h3>Model: {cars.model}</h3>
        <img
          src={cars.src}
          alt={cars.alt}
        />
        <h4>Rok produkcji: {cars.year}</h4>
        <h4>Kolor mojego egzemplarza: {cars.color}</h4>
        <p>{cars.details}</p>
      </div>
      <footer>
        Powered by Łukasz Młynarczyk
      </footer>
    </>
  );
}

export default App;
