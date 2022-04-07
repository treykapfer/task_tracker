
const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm'
    }
]

const Tasks = (props) => {

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick = {onClick}/>
        </header>
    )
}

Header.defaultProps = {
}

// validates string
Header.propTypes = {
}

export default Tasks;