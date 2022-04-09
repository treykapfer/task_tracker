import { useState } from 'react'

const AddTask = ({onAdd}) => {

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

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task!')
            return
        }

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit = {onSubmit}>
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
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={reminderChangeHandler}
                />
            </div>

            <input className='btn btn-block' type='submit' value='Save Task'/>

        </form>
    )
}

export default AddTask;