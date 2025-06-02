import { useReducer } from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { CartContext } from './store';
import './App.css'


function App() {
    const cartReducer = useReducer(
        (state, action) => {
            const cartList = [...state.cartList];
            const index = cartList.findIndex((item) => {
                return item.id === action.payload.id;
            });
            switch (action.type) {
                case 'ADD_TO_CART':
                    if (index === -1) {
                        cartList.push(action.payload);
                    } else if (cartList[index].quantity + action.payload.quantity > 10) {
                        alert('每個餐點最多只能點 10 份');
                        cartList[index].quantity = 10;
                    } else {
                        cartList[index].quantity += action.payload.quantity;
                    }


                    return {
                        ...state,
                        cartList,
                        total: calculateTotalPrice(cartList),
                    };


                case 'CHANGE_CART_QUANTITY':
                    cartList[index].quantity = action.payload.quantity;
                    return {
                        ...state,
                        cartList,
                        total: calculateTotalPrice(cartList),
                    };


                case 'REMOVE_CART_ITEM':
                    cartList.splice(index, 1);
                    return {
                        ...state,
                        cartList,
                        total: calculateTotalPrice(cartList),
                    };


                // case 'CHANGE_PRODUCT_QUANTITY':
                //     return {
                //         ...state,
                //         cartList,
                //     };


                default:
                    return state;
            }
        },
        {
            cartList: [],
        },
    );


    return (
        <CartContext.Provider value={cartReducer}>
            <Navbar />
            <div className="container mt-4">
                {/*外層格線 */}
                <div className="row">
                    <div className="col-md-7">
                        {/*內層格線 */}
                        <Products />
                    </div>
                    <div className="col-md-5">
                        <Cart />
                    </div>
                </div>
            </div>
        </CartContext.Provider>
    );
}


export default App;


function calculateTotalPrice(cartList) {
    return cartList
        .map((item) => item.quantity * item.price)
        .reduce((a, b) => a + b, 0);
}
