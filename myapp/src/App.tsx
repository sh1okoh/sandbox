import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [age, setAge]  = useState(0);

  useEffect(() => {
    document.title = `You clicked ${age} times`;
  });

  return (
    <div>
      <p>
        You are { age } years old! 
      </p>
      <button onClick={() => setAge(age + 1)}>
        click me!
      </button>
    </div>
  );
}

export default App;
