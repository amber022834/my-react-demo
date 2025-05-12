import { filter, title, tr } from "motion/react-client"
import { useMemo, useState } from "react";

function App() {

    //建立表格資料
    const prodData = [
        {
            id: 1,
            title: "ASUS",
            price: 80
        },

        {
            id: 2,
            title: "ACER",
            price: 120
        },
        {
            id: 3,
            title: "MAC",
            price: 150
        },
        {
            id: 4,
            title: "DELL",
            price: 200
        },
        {
            id: 5,
            title: "MIS",
            price: 100
        }

    ];

    //建立表格元件

    const ProdTable = ({ filterProds }) => {
        return (
            <table>
                <tbody>
                    {
                        filterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td>{prod.title}</td>
                                    <td>{prod.price}</td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        )
    }


    //陣列變數
    const [prods, setProds] = useState(prodData);

    //排序變數 預設為遞增
    const [ascending, setAscending] = useState(true);

    //搜尋變數
    const [search, setSearch] = useState('');

    //建立排序與搜尋函式
    const filterProds=useMemo(()=>{

        return[...prods]
        .sort((a,b)=>{
            return ascending?a.price-b.price:
            b.price-a.price
        })

//  區分大小寫       .filter((prod) => {
//     return prod.title.toLowerCase().includes(search.toLowerCase());
// });

        .filter((prod)=>{
            return prod.title.match(search);
            
        })
    },[ascending,search]);


    return (
        <>
            <h1>useMemo搜尋與排序</h1>
            <hr style={{ marginBottom: "50px" }} />

            升降冪
            <input
                type="checkbox"
                checked={ascending}
                onChange={(e) => {
                    setAscending(e.target.checked)
                }}
            />

            <br />
            搜尋
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

            {/* 顯示表格資料 */}
            <ProdTable filterProds={filterProds} />


        </>
    )
}
export default App