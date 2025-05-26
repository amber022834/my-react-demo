export default function navbar() {
    return (
        <>
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
        </>
    )

}

