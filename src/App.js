import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./App.css";
import { useState } from 'react';

function App() {
  const [text, setText] = useState("Enter name:");

  const clickHandler = () => {
    let in_text_el = document.getElementById("inp")
    setText("hello, " + in_text_el.value)
  }
  
  return (
    <div className="App">
      <div className="Block">{text}</div>
      <div className="Block"><TextField id="inp" label="name" variant="standard" /></div>
      <div className="Block"><Button onClick={clickHandler} variant="contained">say hello</Button></div>
    </div>
  );
}

export default App;
