import "./App.css";
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


import ToolBar from './components/layout/ToolBar';
import InputBar from './components/layout/InputBar';
import InputList from './components/layout/InputList';
import Footer from './components/layout/Footer';

function App() {
  const [text, setText] = useState("Enter name:");

  const clickHandler = () => {
    let in_text_el = document.getElementById("inp")
    setText("hello, " + in_text_el.value)
  }
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div className="App">
      <ToolBar />
      <InputBar />
      <InputList />
      <Footer />
    </div>
  );
}

export default App;
