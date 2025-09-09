function AddTask(){
    return <div>
        <form>
            <input type="text" placeholder="Task Name" />
            <input type="datetime-local" />
            <button type="submit">Add Task</button>
        </form>
    </div>
}
export default AddTask;