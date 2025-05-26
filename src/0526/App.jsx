import './App.css';
import Navbar from './component/navbar';
import Products from './component/products';


export default function App() {
    return (
        <>
            <div className="wrap">
                {/* 導覽列 */}
                <div className="container">
                    {/* 產品清單區(卡片元件) */}
                    <Navbar />
                    <div className="container mt-4">
                        <div className='row'>
                            {/* 內層格線範圍 */}
                            {/* 產品列表區(左) */}
                            <div className="col-md-7"><Products /></div>

                            <div className="col-md-5">
                                <div className='bg-light p-3'>
                                    <table className='table align-middle'>
                                        <tbody>
                                            <tr >
                                                <td><a href="">x</a></td>
                                                <td>
                                                    <img src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className="table-img" alt="..." />

                                                </td>

                                                <td>
                                                    產品名稱
                                                    <br />
                                                    <small className='text-muted'>Nt200</small>
                                                </td>
                                                <td>
                                                    <select name="" id="" className='forn-select'></select>
                                                </td>
                                                <td className='text-end'>Nt400</td>
                                            </tr>

                                            <tr >
                                                <td><a href="">x</a></td>
                                                <td>
                                                    <img src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className="table-img" alt="..." />

                                                </td>

                                                <td>
                                                    產品名稱
                                                    <br />
                                                    <small className='text-muted'>Nt200</small>
                                                </td>
                                                <td>
                                                    <select name="" id="" className='forn-select'></select>
                                                </td>
                                                <td className='text-end'>Nt600</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td className='text-end' colSpan={5}>總金額 Nt1000</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>)

}
