import { useState } from "react"

function EditForm({ todo,editTodo }) {
    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e) => {
        //取消網頁預設行為(不然會抓不到資料)
        e.preventDefault();
        //增加todo內容
        editTodo(todo.id,content);
    }

    return (
        <form className="createfrom" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="輸入代辦事項"
                value={content}
                //雙向綁定
                //當ui內容改變時，state內容也改變
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">完成</button>
        </form>
    )
}
export default EditForm