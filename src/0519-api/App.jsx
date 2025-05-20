import axios from "axios"
import { div } from "motion/react-client";
import { useEffect, useRef, useState } from "react";
export default function App() {

    //https://api.unsplash.com/photos/?client_id=HYSI1rY2MfR84pyHMGqtf-JhxXEm63HjTZmxkcf_fEA
    const api = 'https://api.unsplash.com/search/photos';
    const accessKey = "HYSI1rY2MfR84pyHMGqtf-JhxXEm63HjTZmxkcf_fEA";
    const [filterString, setFilterString] = useState('dog');

    //存放篩選後的資料
    let [jsonData, setJsonData] = useState([]);

    //目前頁數
    const currentPage = useRef(1);
    //讀取變數
    const isLoading = useRef(false);


    //建立非同步方法取得遠端資料
    const getPhotos = async (page = 1, isNew = true) => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);

            //將資料寫入json
            setJsonData((preData) => {
                //假如是新的關鍵字，回傳新的關鍵字結果
                if (isNew) {
                    return [...result.data.results];
                }
                //先前的資料+當前的資料
                return [...preData, ...result.data.results];
            });
            //更新頁數
            currentPage.current = page;

            //1秒鐘後取消寫入
            setTimeout(() => {
                isLoading.current = false;
            }, 1000);
            console.log(jsonData);
        } catch (err) {
            console.log(err)
        }
    }

    //顯示資料元件
    const ShowPhotos = () => {
        console.log(jsonData)

        return (
            jsonData.map((item, index) => {
                return (<div key={index}>
                    <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                </div>)
            })
        )

    }

    //建立搜尋元件
    const SearchBox = ({ onSearchHandler, filterString }) => {
        return (
            <div>
                <label htmlFor="filter">Search</label>
                <input
                    type="text"
                    id="filter"
                    defaultValue={filterString}
                    onKeyDown={onSearchHandler}
                />
            </div>
        )
    }

    //點enter鍵更改資料函式
    const onSearchHandler = (e) => {
        if (e.key === "Enter") {
            setFilterString(e.target.value);
        }
    }

    //列表高度
    const listRef = useRef(null);


    useEffect(() => {
        getPhotos(1, true);
        //滾動監聽函式
        const scrollEvent = () => {
            // console.dir(listRef.current);

            //取得圖片目前高度
            const height = (listRef.current.offsetHeight + listRef.current.offsetHeight) - window.innerHeight;
            if (isLoading=='true' && window.scrollY > height) {
                //頁數+1
                currentPage.current++;
                //同一個關鍵字不覆蓋，要補上false
                getPhotos(currentPage.current, false);

            }
        }
        //滾動監聽
        addEventListener('scroll', scrollEvent);
        //移除監聽，確保每次滾動時是正確的位置和資料
        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
    }, [filterString])


    return (
        <>
            <h1>取得遠端資料</h1>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} /></div>


            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} ref={listRef}>
                <ShowPhotos />
            </div>


        </>
    )
}
