import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
     return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            <CreateForm/>
            <Todo/>
        </div>
     )
}
export default TodoWrapper