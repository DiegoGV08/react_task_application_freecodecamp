import './App.css';
import freeCodeCampLogo from './images/freecodecamp_logo.png'
import TaskList from './components/TasksList';

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
        <TaskList />
      </div>

    </div>
  );
}

export default App;
