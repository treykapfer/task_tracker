import { useState } from 'react'

const AddTask = () => {
    
    //use state for form
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    //change handlers for form
    const textChangeHandler = (e) => {
        setText(e.target.value)
    }
    const dayChangeHandler = (e) => {
        setDay(e.target.value)
    }
    const reminderChangeHandler = (e) => {
        setReminder(e.currentTarget.checked)
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={textChangeHandler} />
            </div>
            
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={dayChangeHandler}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={reminderChangeHandler}/>
            </div>

            <input className='btn btn-block' type='submit' value='Save Task'/>

        </form>
    )
}

export default AddTask;