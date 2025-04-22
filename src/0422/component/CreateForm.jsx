import { useState } from "react"

function CreateForm(){
    const[content,setContent]=useState('');

    return(
        <form className="createform">
            <input 
            type="text" 
            placeholder="輸入代辦事項"
            value={content}
            //雙向綁定
            //當ui內容改變時，state內容也改變
            onChange={(e)=>{
                setContent(e.target.value)
            }}
            />
            <button type="submit">加入</button>
        </form>
    )
}
export default CreateForm