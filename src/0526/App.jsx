import './App.css'

export default function App() {
    return (
        <>
            <div className="wrap">
                {/* 導覽列 */}
                <div className="container">
                    {/* 產品清單區(卡片元件) */}
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <span class="navbar-brand" href="#">Navbar</span>
                            <button type="button" className="btn btn-outline-success position-relative">
                                購物車
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    3
                                    <span className="visually-hidden">items in cart</span>
                                </span>
                            </button>




                        </div>
                    </nav>
                    {/* 購物清單(購物清單) */}
                    <div className="container mt-4">
                        <dir className='row'>
                            <div className="col-md-7">
                                <div className="row row-cols-3 g-3">
                                    <div className="col">
                                        <div class="card ">
                                            <img src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">
                                                    產品名稱
                                                    <span className="float-end">NT200</span>
                                                </h6>

                                                <button class="btn btn-outline-primary w-100" type="button">加入購物車</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div class="card ">
                                            <img src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">
                                                    產品名稱
                                                    <span className="float-end">NT200</span>
                                                </h6>

                                                <button class="btn btn-outline-primary w-100" type="button">加入購物車</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div class="card ">
                                            <img src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">
                                                    產品名稱
                                                    <span className="float-end">NT200</span>
                                                </h6>

                                                <button class="btn btn-outline-primary w-100" type="button">加入購物車</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div class="card ">
                                            <img src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">
                                                    產品名稱
                                                    <span className="float-end">NT200</span>
                                                </h6>

                                                <button class="btn btn-outline-primary w-100" type="button">加入購物車</button>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                {/* 內層格線範圍 */}
                                {/* 產品列表區(左) */}

                            </div>
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
                        </dir>

                    </div>
                </div>

            </div>
        </>)

}
