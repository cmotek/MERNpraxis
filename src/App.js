import logo from './logo.svg';
import GoalList from './components/GoalList';
import './App.css';
import React from 'react';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ];

  return <div className="course-goals">
    <h2>Course Goals</h2>
    <GoalList goals={courseGoals} />
  </div>
}



export default App;


//<div className="App">
//<header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" />
//  <p>
//    Edit <code>src/App.js</code> and save to reload.
//  </p>
//  <a
//    className="App-link"
//    href="https://reactjs.org"
//    target="_blank"
//    rel="noopener noreferrer"
//  >
//    Learn React
//  </a>
//</header>
//</div>