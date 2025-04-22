// function Todo(props) {
//     return (
//         <div className="todo">
//             {/* 使用props接收元件屬性 */}
//             <p>{props.todo}</p>
//         </div>
//     )
// }
// export default Todo

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Todo({ todo }) {
    return (
        <div className="todo">
            {/* 使用props接收元件屬性 */}
            <p>{todo.content}</p>
            {/* 修改 */}
            <div>
                <MdEdit style={{ cursor: 'pointer', color:"grey"}} />
                < MdDelete style={{ cursor: 'pointer', marginleft:"5px" ,color:"grey"}} />
            </div>

        </div>
    )
}
export default Todo
