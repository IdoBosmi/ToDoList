import {ReactComponent as Logo} from '../icons8-tick.svg'

const TaskList = ({ tasks }) => {

    const handleClick= (e)=>{

      let targetId = e.target.id;

       // If the target ID is empty or it's from the SVG (Logo), traverse up the DOM to find the button's ID
      if (!targetId || e.target.tagName === 'svg') {
        targetId = e.target.closest('button').id;
      }

      fetch(`http://localhost:5000/tasks/${targetId}`,{
          method: 'DELETE'
      })
      .then((res)=>{
          window.location.reload(false);
      } );
    }

    return (
      <div className="task-list">
        {tasks.length === 0 && <h2>The are no tasks... </h2>}
        {tasks.length >0  &&  tasks.map(task => (
          <div className="task-div" key={task._id} >
            <h2>{ task.title }</h2>
            <button id={task._id} onClick={handleClick}>
              <Logo/>
            </button>
          </div>
        ))}
      </div>
    );
  }
   
  export default TaskList;