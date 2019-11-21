import React from 'react';
import './App.css';
import Header from './components/Header.js' 
import Footer from './components/Footer.js'
import Display from './components/Display.js'



class App extends React.Component{

  render(){
  return (
    <div className="App">
      <Header/>
      <Display/>
      <Footer />  
      

    </div>
  );
}
}

export default App;

// lol
