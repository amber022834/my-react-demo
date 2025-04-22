import { useState } from "react"

function CreateForm({ addTodo }) {
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        //取消網頁預設行為(不然會抓不到資料)
        e.preventDefault();
        //增加todo內容
        addTodo(content);
        //清空input內容
        setContent('');
    }

    return (
        <form className="createform" onSubmit={handleSubmit}>
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
            <button type="submit">加入</button>
        </form>
    )
}
export default CreateForm