// 用html做
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>



// <body>
//     <!-- HTML分頁效果 -->

//     <div id="page1" >
//         我是第一頁
//         <br>
//         <button onclick="changeToPage2();">下一步</button>
//     </div>

//     <div id="page2" style="display: none;">
//       我是第二頁
//       <br>
//       <button onclick="backToPage1();">上一步 </button>
//       <button onclick="changeToPage3();">下一步</button>
//     </div>

//     <div id="page3" style="display: none;">
//         我是第三頁
//         <br>
//         <button onclick=" backToPage2();">上一步 </button>
//     </div>

//     <script>
//         function changeToPage2() {
//             //顯示
//             let about = document.querySelector("#page2");
//             page2.style.display = "block";

//             //隱藏
//             let news=document.querySelector("#page1");
//             page1.style.display = "none";
//         }

//         function changeToPage3() {
//             //隱藏a
//             let about = document.querySelector("#page3");
//             page3.style.display = "block";

//             //顯示
//             let news=document.querySelector("#page2");
//             page2.style.display = "none";
//         }

//         function backToPage1(){
//             let about = document.querySelector("#page2");
//             page2.style.display = "none";

//             //顯示news
//             let news=document.querySelector("#page1");
//             page1.style.display = "block";

//         }

//         function backToPage2(){
//             let about = document.querySelector("#page3");
//             page3.style.display = "none";

//             //顯示news
//             let news=document.querySelector("#page2");
//             page2.style.display = "block";

//         }

//     </script>
// </body>

// </html>

//用react做 參考App0415



//建立子元件
function ChangePage({page,setPage,buttontype}) {
    const HandelClick = () => {
        if ( page<3 && buttontype=="下一頁") {
            setPage(page + 1);
            
        }

        if (page>1 && buttontype=="上一頁"){
            setPage(page-1);
        }
    }
return (
    <>
        <button onClick={HandelClick} >{buttontype}</button>
    </>
)
}


// //程式進入點
function App() {
    return (
        <>
            <div id="第一頁" >
                <h2>第一頁</h2>
                <ChangePage buttontype={"下一頁"}/>
            </div>

            <div id="第二頁" style={{display:none}}>
                <h2>第二頁</h2>                 
                <ChangePage buttontype={"下一頁"}/>
                <ChangePage buttontype={"上一頁"}/>
            </div>
            <div id="第三頁" style={{display:none}}>
                <h2>第三頁</h2>
                <ChangePage buttontype={"上一頁"}/>
            </div>

        </>
    )
}
export default App


