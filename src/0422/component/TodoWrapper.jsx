import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    // 有多個todo因此用陣列存放物件資料
    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random(), isCompleted: false },
        { content: '對發票', id: Math.random(), isCompleted: false },
    ])

    //建立加入新的todo內容(函式)
    const addTodo = (newContent) => {
        //其餘運算子
        setTodos([...todos, { content: newContent, id: Math.random(), isCompleted: false }])
    }

    //建立刪除函式
    //傳入被刪除的id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            //如果被刪除id不等於原來的id就要保留
            return todo.id !== id
        }))
    }

    //切換是否被點擊，更改於原本isCompleted狀態
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            // if(todo.id==id){
            //     return {...todo, isCompleted:!todo.isCompleted }
            // }else{
            //     return todo
            // }

            // 三源運算子({條件成立，更改狀態} 括號外為else的狀態)
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            {/* addTodo式屬性，後面括號內是function */}
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo
                        todo={todo}
                        key={todo.id}
                        delTodo={delTodo}
                        toggleCompleted={toggleCompleted}
                    />
                })
            }

        </div>
    )
}
export default TodoWrapper