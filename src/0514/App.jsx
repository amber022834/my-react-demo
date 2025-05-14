import "./App.css"
export default function App() {
    return (
        <>
            {/* 按鈕區 */}
            <div id="wrapper">
                <div id="filterBtn">
                    <a href="javascript" className="allItem">All</a>
                    <a href="javascript" className="cats">Cats</a>
                    <a href="javascript" className="food">Food</a>
                    <a href="javascript" className="view">View</a>
                </div>


                {/* 圖片區 */}
                <div id="filterList">
                    <ul>
                        <li className="cats"><img src="./images/cats1.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/cats2.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/cats3.jpg" alt="" /></li>
                        <li className="view"><img src="./images/view2.jpg" alt="" /></li>
                        <li className="view"><img src="./images/view3.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/cats6.jpg" alt="" /></li>

                        <li className="food"><img src="./images/food1.jpg" alt="" /></li>
                        <li className="food"><img src="./images/food2.jpg" alt="" /></li>
                        <li className="food"><img src="./images/food3.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/cats4.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/cats5.jpg" alt="" /></li>
                        <li className="food"><img src="./images/food4.jpg" alt="" /></li>


                        <li className="view"><img src="./images/view1.jpg" alt="" /></li>
                        <li className="food"><img src="./images/food5.jpg" alt="" /></li>

                        <li className="view"><img src="./images/view4.jpg" alt="" /></li>

                    </ul>
                </div>
            </div>
        </>
    )
}