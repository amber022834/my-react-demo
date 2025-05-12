
import { div } from "motion/react-client";
import { useState, createContext, useContext } from "react";

function App() {

    //建立共用環境
    const UserContext = createContext({});

    //建立使用者變數
    const [username, setUsername]=useState('demo')

    //建立登入紐控制
    const [isLogin,setIsLogin]=useState(false);

    //建立登入元件
    const LoginForm=()=>{
        const {username,setUsername,setIsLogin}=useContext(UserContext);



        return(
            <>
            <label htmlFor="username">使用者名稱</label>
            <input 
            type="text" 
            id="username"
            placeholder="請輸入使用者名稱"
            value={username}
            onChange={e=>setUsername(e.target.value)}/>

            <button type="button" onClick={()=>{setIsLogin(true)}}>登入 </button>
            </>
        )

    }


    //登入後的元件
    const Greeting =()=>{
        //與登入元件為同一階層，所以可以透過useContext功能從userContext取得username
        const {username}=useContext(UserContext);
        return(
            <div>
                Hi，{username}
            </div>
        )

    }



    return (
        <>
          <h1>useContext</h1>
          <hr style={{marginBottom:"50px"}}/>
          <UserContext.Provider value={{username,setUsername,setIsLogin}}>

            {
                isLogin?<Greeting/>:<LoginForm/>
            }

          </UserContext.Provider>

        </>
          

       
    )
}

export default App