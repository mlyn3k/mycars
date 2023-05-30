import './App.css';
import {useState} from 'react';
import { carsList } from './data';
import { Button } from '@mui/material';


function App() {
  const [car, setCar] = useState(0);

function handle0Click() {
  setCar(0);
}

function handle1Click() {
  setCar(1);
}

function handle2Click() {
  setCar(2);
}

function handle3Click() {
  setCar(3);
}

let cars = carsList[car];

  return (
 <>
 <div className='app'>
        <h1>Moje dotychczasowe auta:</h1>
        <Button variant="contained" size="small" onClick={handle0Click}>Pierwsze</Button>
        <Button variant="contained" size="small" onClick={handle1Click}>Drugie</Button>
        <Button variant="contained" size="small" onClick={handle2Click}>Trzecie</Button>
        <Button variant="contained" size="small" onClick={handle3Click}>Czwarte</Button>
      
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
