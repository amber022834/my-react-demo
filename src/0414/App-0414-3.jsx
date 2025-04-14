// props將父組件傳給子組件，只能由上到下傳送，沒有下到上

//子元件1
function MyComponent(props) {
    //查看props物件
    console.log(props);
    //執行父元件傳送過來的c屬性函式，在return外不用加大括號在內要加
    // props.c()

    //使用大括號{props.屬性}
    return (
        //使用空標籤傳送兩個屬性
        <>
            <div>我是子元件，帶有主元件傳遞過來的屬性，內容為「{props.a}」</div>
            <div>我是子元件，帶有主元件傳遞過來的屬性，內容為「{props.b}」</div>
            {props.c()}
        </>)
}

//子元件2
//由於props是物件，所以可以使用解構賦值來取用資料，括號內名稱要相符
function MyComponent2({a,b,c}) {
    //呼叫c方法
    c()
    return<>
    <div>第一個屬性：{a}</div>
    <div>第二個屬性：{b}</div>
    <div>第三個屬性：{(c)}</div>
    </>
}


//父元件
function App() {
    return (
        <>
            {/* 回調函式，callback function */}
            {/* 建立屬性a */}
            <MyComponent
                a="我是屬性a"
                b="我是屬性b"
                //也可以傳送函式，要用大括號包起來
                c={() => { console.log("我是屬性c") }}
            />

            <MyComponent2
                a="我是屬性a"
                b="我是屬性b"
                //也可以傳送函式，要用大括號包起來
                c={() => { console.log("我是屬性c") }}
            />
        </>
    )
}

export default App;