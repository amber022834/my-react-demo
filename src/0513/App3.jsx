export default function App() {

    let country = [
        {
            cityId: 1,
            cityName: "台北市"
        },
        {
            cityId: 2,
            cityName: "桃園市"
        },

    ]

    return (
        <>
            <button onClick={() => {
                //將陣列物件轉乘字串
                let countryString=JSON.stringify(country);


                localStorage.setItem('countrys',countryString)
            }}>寫入</button>

            <button onClick={() => {
                //f取出localstorage資料
                let getData=localStorage.getItem('countrys')
               
                //字串轉乘陣列
               let getDataArr=JSON.parse(getData);
               console.log('getDataArr',getDataArr,typeof(getDataArr))
            }}>讀取</button>
        </>
    )
}