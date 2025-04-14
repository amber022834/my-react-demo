//建立物件
const obj1 = {
    name: '建仔',
    age: '7'
}
// //一般寫法
// const name=obj1.name;
// const age=obj1.age;
// console.log(name,age)

//物件解構
// const {name,age}=obj1
// console.log(name,age)

//陣列
const arr1 = ['p1', 'p2', 'p3']
//一般寫法
// console.log(arr1[0],arr1[1],arr1[2]);

// //陣列解構
// const[pNo1,pNo2,pNo3]=arr1
// console.log(pNo1,pNo2,pNo3)

const data = {
    s1: {
        id: 's001',
        subject: 'HTML',
        score: '100',
    },
    s2: {
        id: 's002',
        subject: 'HTML',
        score: '99',
    },
    s3: {
        id: 's003',
        subject: 'HTML',
        score: '98',
    }
}
//解構+展開
//解構s1，展開s2,s3

//先解構物件s2
const {s2, ...other }=data
console.log(s2)
console.log(other)

//再解構s2中的物件
const {id,subject,score}=s2
console.log(id,subject,score)


function App() {
    return (
        <>
            上課中

        </>
    )
}
export default App;

