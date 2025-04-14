function Component() {
    return <h1>React</h1>
}

function App() {
    const listitem = [
        //建立陣列1
        //陣列內容可以是屬性、方法或是元件
        //同一個陣列中key屬性的值不能重複
        //在陣列中有兩個元件時需要寫逗號並寫上key屬性
        <Component key='0' />,
        <Component key='1' />

    ]

    //建立陣列2
    const listBooks = [
        { bookName: "HTML", id: "book1" },
        { bookName: "CSS", id: "book2" },
        { bookName: "JavaScript", id: "book3" },
        { bookName: "React", id: "book4" }
    ]

    //過濾出除了CSS的書本(檢查書本名稱不是css就保留)，
    const filterBooks=listBooks.filter((book)=>{
        if(book.bookName!='CSS'){
            return true
        }

    })

    return (
        <>
            {/* 使用陣列方法1 */}
            {listitem}
            <hr/>

            {/* 使用陣列方法2，帶出值時需要讓迴圈知道要帶出哪個值的哪個屬性，所以要明確定義*/}
            {
                listBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>

                })

            }
            <hr/>
            {/* 顯示filter()過濾後的陣列資料，用map一定有return */}
            {
                filterBooks.map((book)=>{
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
        </>
    )

} export default App;
