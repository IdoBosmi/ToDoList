
import TaskList from './components/TaskList';
import NewTask from './components/NewTask'
import useFetch from './components/useFetch';

function App() {

  const {error, data:tasks, isPending} = useFetch('http://localhost:5000/tasks');

  return (
    <div className="App">
      <h1>To Do List</h1>
      <NewTask/>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tasks && <TaskList tasks={tasks} /> }
      
    </div>
  );
}

export default App;
