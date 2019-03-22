import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion.js'

const sections = [
  {
    title: 'Sloth',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Lemur',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Scorpion',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion sections={sections}/>
      </div>
    );
  }
}

export default App;
