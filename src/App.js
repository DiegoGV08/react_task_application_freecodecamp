import './App.css';
import freeCodeCampLogo from './images/freecodecamp_logo.png'
import Task from './components/Task.js'

function App() {
  return (
    <div className="task-application">
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo} alt='this is a logo'
          className='freecodecamp-logo' />
      </div>

      <div className='task-list-principal'>
          <h1>My Tasks</h1>
          <Task text='Aprender React'/>
      </div>

    </div>
  );
}

export default App;
