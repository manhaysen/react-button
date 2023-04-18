import React, { useState } from 'react';
import './App.css';
import Button from './features/Button';

function App():JSX.Element {
  const defaultBgColor = "red"
  const defaultTextcolor = "blue"
  const [isDefault, setIsDefault] = useState(true)  
  const change = () => { 
    setIsDefault(prev => !prev)}
  
    return (
    <div className="App">   
     <Button customBgColor={"black"} customTextcolor={"green"} defaultBgColor = {defaultBgColor} defaultTextcolor={defaultTextcolor} change={change} isDefault={isDefault}/>
    </div>
  );
}

export default App;
