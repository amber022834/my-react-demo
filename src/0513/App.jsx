import { useRef} from "react";

export default function App() {
    // const [value, setValue] = useState('');
    //建立useRef變數
    const inputRef = useRef(null);
    
    console.log('App渲染了');

    const submitHandler = () => {
        // console.log(value);

        //傳回被綁定的useRef
        // console.log(inputRef.current.value);

        //查類型
        // console.log(inputRef.current.type)
        //動態改變類型(密碼類行為password時看不到密碼 但打開眼睛時可以看到密碼)
        // console.log(inputRef.current.type)
        inputRef.current.type = "password";
    }

        const submitHandler2= () => {
       

        //動態改變類型(密碼類行為password時看不到密碼 但打開眼睛時可以看到密碼)
        inputRef.current.type = "text";

        // console.log(inputRef.current.type)
        
    }
    return (
        <>
            {/* <input type="text" onChange={(e) => setValue(e.target.value)} /> */}
            <input type="text" ref={inputRef} />
            <button onClick={submitHandler(true)}>關閉密碼</button>
            <button onClick={submitHandler2(false)}>查看密碼</button>
        </>
    )
}

