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
import EditForm from "./EditForm";


function Todo({ todo, delTodo, toggleCompleted, toggleIsEdit,editTodo }) {
    return (

        //如果是edit狀態就會用EditForm功能
        todo.isEdit ? <EditForm todo={todo} editTodo={editTodo}/> :

            //使用三元運算子
            //條件式?成立:不成立
            <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* 使用props接收元件屬性 */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                
                {/* 修改 */}
                <div>
                    <MdEdit
                        onClick={ ()=>{toggleIsEdit(todo.id)}}
                        style={{ cursor: 'pointer', color: "grey" }} />
                    < MdDelete
                        //刪除按鈕觸發delTodo方法
                        onClick={() => { delTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginleft: "5px", color: "grey" }} />
                </div>

            </div>
    )
}
export default Todo
