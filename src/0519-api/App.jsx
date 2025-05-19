import axios from "axios"
import { useEffect, useState } from "react";
export default function App() {

    //https://api.unsplash.com/photos/?client_id=HYSI1rY2MfR84pyHMGqtf-JhxXEm63HjTZmxkcf_fEA
    const api = 'https://api.unsplash.com/search/photos';
    const accessKey = "HYSI1rY2MfR84pyHMGqtf-JhxXEm63HjTZmxkcf_fEA";
    const [filterString, setFilterString] = useState('cat');

    //存放篩選後的資料
    let [jsonData, setJsonData] = useState([]);


    //建立非同步方法取得遠端資料
    const getPhotos = async () => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);

            //將資料寫入json
            setJsonData(result.data.results);
            console.log(jsonData);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPhotos();
    }, [])


    return (
        <>
            <h1>取得遠端資料</h1>

        </>
    )
}