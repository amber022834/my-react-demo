// function Todo(props) {
//     return (
//         <div className="todo">
//             {/* 使用props接收元件屬性 */}
//             <p>{props.todo}</p>
//         </div>
//     )
// }
// export default Todo

import { MdDelete, MdEdit } from "react-icons/md";


function Todo({ todo, delTodo, toggleCompleted }) {
    return (
        //使用三元運算子
        //條件式?成立:不成立
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            {/* 使用props接收元件屬性 */}
            <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
            {/* 修改 */}
            <div>
                <MdEdit style={{ cursor: 'pointer', color: "grey" }} />
                < MdDelete
                    //刪除按鈕觸發delTodo方法
                    onClick={() => { delTodo(todo.id) }}
                    style={{ cursor: 'pointer', marginleft: "5px", color: "grey" }} />
            </div>

        </div>
    )
}
export default Todo
