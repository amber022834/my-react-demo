import { Link } from "react-router-dom"

function Navbar() {
    return (

        <div>
            <ul>
                {/* <li><a ="">首頁</a></li>
        <li><a ="">關於我</a></li>
        <li><a ="">最新消息</a></li> */}

                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <Link to="/about">關於我</Link>
                </li>
                <li>
                    <Link to="/news">最新消息</Link>
                </li>
            </ul></div>

    )
}
export default Navbar