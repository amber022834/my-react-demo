import { useState } from "react";

//props.count可以簡寫為{count}，j或是寫為{(propsCount)}
function ChildComponent(props){
return <div>{props.count}</div>
}

//建立子元件
function MyComponent(){
    //使用狀態(state)控制變數
    //const[count,setCount]=useState(0); count是宣告的變數，setcount是改變變數後的值，useStete()括號中為起始值
    const[count,setCount]=useState(0);
    const HandelClick=()=>{
        //使用useState中的方法，改變count變數值
        //count+1不能用count++
        setCount(count+1);
    }
    return(
        <>
        <button onClick={HandelClick}>點擊次數:{count}</button>
        <ChildComponent propsCount={count}/>
        </>
    )
}


//程式進入點
function App(){
    return(
        <>
        {/* 呼叫子元件 */}
        {/* 不同子元件都是互相獨立的 */}
        <MyComponent/>
        <MyComponent/>
        <MyComponent/>
        </>
    )
}
export default App