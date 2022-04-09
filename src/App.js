import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {

  const [tasks, setTasks]  = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    }
]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('deleted', id)
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task))
    console.log(id)
  }

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? 
        <Tasks tasks ={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> :
        <h3 style={{color: 'red'}}>No Tasks Available</h3>}
    </div>
  );
}

export default App;
