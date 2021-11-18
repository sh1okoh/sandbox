import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

type Hoge = {
  title: string,
  createdAt: string
}

const Mock = () => {
  const [hoges, setHoges] = useState<Hoge[]>([]);
  const getEntries = async () => {
    const { data } = await axios.get<Hoge[]>("/hoges");
    setHoges(data);
  };

  console.log("hoges", hoges);

  useEffect(() => {
    getEntries();
  }, []);
  return (
    <div>hoge</div>
  )
}

function App() {
  return (
    <div className="App">
      <Mock />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
