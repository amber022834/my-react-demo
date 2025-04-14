
function App() {
    function sayHi3(){
        alert('Hi3')
    }

    const sayHi4=()=>{
        alert('Hi4')
    }
    
    return (
        <>
            {/* 事件處理 */}
            <button onClick={
                //匿名函式
                function () {
                    alert('Hello')
                }
            }>打招呼1</button>


            <button onClick={
                //匿名函式
                () => {
                    alert('Hello')
                }
            }>打招呼2</button>

            {/* 事件處理2 */}
            {/* 呼叫函式: 被呼叫的函式後面不能加上() ，加括號會立刻執行函式不能呼叫*/}
            <button onClick={sayHi3}>打招呼3</button>
            <button onClick={sayHi4}>打招呼4</button>
        </>
    )
}
export default App