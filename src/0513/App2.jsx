export default function App() {

    //寫入資料
    // window.localStorage.setItem('book1','html')
    return (
        <>
            <h1>本地端存取資料</h1>
            <button onClick={() => {
                window.localStorage.setItem('book1', 'html');
                window.localStorage.setItem('book2', 'css');
                window.localStorage.setItem('book3', 'js');
            }}>寫入資料</button>


            <button onClick={() => {
                // 已知key名稱寫法
                //    console.log(window.localStorage.getItem('book1'))

                //未知key寫法，讀取全部資料
                for(let i=0; i<window.localStorage.length; i++){
                    var key=window.localStorage.key(i);
                    console.log(window.localStorage.getItem(key))
                }

            }}>讀取資料</button>
            <button>刪除資料</button>
            <button>全部刪除資料</button>
        </>
    )
}