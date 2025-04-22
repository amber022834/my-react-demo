// function Todo(props) {
//     return (
//         <div className="todo">
//             {/* 使用props接收元件屬性 */}
//             <p>{props.todo}</p>
//         </div>
//     )
// }
// export default Todo


function Todo({todo}) {
    return (
        <div className="todo">
            {/* 使用props接收元件屬性 */}
            <p>{todo.content}</p>
        </div>
    )
}
export default Todo
