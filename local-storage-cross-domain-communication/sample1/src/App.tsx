import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleOnClick = () => {
    localStorage.setItem('text', text)
  }

  return (
    <>
      <div>
        <textarea id="textarea" rows={10} cols={50} onChange={handleOnChange} value={text}>
        </textarea>
        <button onClick={handleOnClick}>
          Save
        </button>
      </div>
    </>
  )
}

export default App
