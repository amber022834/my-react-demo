


function changeToPage(num) {
    document.querySelector("#page1").style.display = "none";
    document.querySelector("#page2").style.display = "none";
    document.querySelector("#page3").style.display = "none";

    document.querySelector("#btn1").style.display = "none";
    document.querySelector("#btn2").style.display = "none";
    document.querySelector("#btn3").style.display = "none";

    if (n == 2) {
        document.querySelector("#page2").style.display = "block"
        document.querySelector("#btn2").style.display = "block";
    document.querySelector("#btn3").style.display = "block";
    }
    


    if (n == 1) {
        document.querySelector("#page1").style.display = "block"
         document.querySelector("#btn1").style.display = "block";
    }
   



    if (n == 3) {
        document.querySelector("#page3").style.display = "block"
        document.querySelector("#btn3").style.display = "block";
    }
    

    return (
        <>
        <button onClick={HandelClick}>{page}</button>
        < changeToPage/>
        </>
    )

}


// // //程式進入點
function App() {
    return (
        <>
            <div id="page1" >
                <h2>第一頁</h2>
                <button onClick={changeToPage}>下一頁</button>
            </div>

            <div id="page2">
                <h2>第二頁</h2>
                <button onClick={changeToPage}>下一頁</button>
                <button onClick={changeToPage}>上一頁</button>
            </div>
            <div id="page3" >
                <h2>第三頁</h2>
                <button onClick={changeToPage}>上一頁</button>
            </div>

        </>
    )
}
export default App
