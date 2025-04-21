import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import News from "./News"

function App() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </div>
    )
}
export default App