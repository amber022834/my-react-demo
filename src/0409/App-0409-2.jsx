import { useState } from "react";

//建立元件(名稱字首大寫)
function Card({ person }) {
    const{name,age}=person;
    return (
        <div className="card">
            <div className="card-body">
                Hi, {name}今年{age}歲
            </div>
        </div>
    )
}

function App() {

    // //取出特定值作為變數
    // const person = {
    //     name: '建仔',
    //     age: '19',
    // }
    // //一般寫法
    // const name=person.name;
    // const age=person.age;
    // console.log(name,age); //結果會顯示兩次因為是嚴謹模式

    //物件解構
    // const { name, age } = person;
    // console.log(name, age);

    //useState: ReactHook
    const [person, setPerson] = useState({
        name: '建仔',
        age: '10',
    });


    return (
        <>
            {/* 第一個person是元素屬性，第二個是變數 */}
            <Card person={person}></Card>
            <Card person={person} />
        </>
    )
}

export default App;