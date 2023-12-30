import {useState} from 'react';

const NewTask = () =>{

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleKeypress = (e) =>{
        if (e.keyCode === 13){
            handleClick();
        }
    }


    const handleChange = (e)=>{
        setNewTaskTitle(e.target.value);
        console.log(newTaskTitle);
    }

    const handleClick = () => {
    
        const taskData = { title: newTaskTitle }; 

        fetch('http://localhost:5000/tasks',{
            method: 'POST',
            headers:{ 'Content-Type': "application/json"},
            body: JSON.stringify(taskData)
        })
        .then((res)=>{
            window.location.reload(false);
        });
    } 

    return(
        <div className="new-task">
            <input type="text" onChange={handleChange} onKeyDown={handleKeypress}></input>
            <button onClick={()=> handleClick()}> Add New Task</button>
        </div>
    ) 
}

export default NewTask;