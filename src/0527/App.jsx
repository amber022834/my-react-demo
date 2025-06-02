import './App.css'
import Cart from "./component/Cart";
import Navbar from './component/Navbar'
import Products from './component/Products'

export default function App() {
    return (<>
        <div className='wrap'>
            <Navbar />
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-7'>
                        <Products />
                    </div>
                    <div className='col-md-5'>
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    </>)
}