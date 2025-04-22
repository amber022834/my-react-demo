import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    // 有多個todo因此用陣列存放物件資料
    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random() },
        { content: '對發票', id: Math.random() },
    ])

    //建立加入新的todo內容(函式)
    const addTodo=(newContent)=>{
        //其餘運算子
        setTodos([...todos,{content:newContent, id: Math.random()}])

    }


    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            {/* addTodo式屬性，後面括號內是function */}
            <CreateForm addTodo={addTodo}/>
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}/>
                })
            }

        </div>
    )
}
export default TodoWrapper