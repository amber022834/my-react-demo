import { td, tr } from "motion/react-client"
import { useContext } from "react"

export default function Cart() {
    const [state, dispatch] = useContext(CartContext);
    return (
        <div className="bg-light p-3">
            <table className="tabl align-middle">
                <tbody>
                    {state.cartList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-sm"
                                        onClick={(e) => {
                                            dispatch({
                                                type: 'REMOVE_CART_ITEM',
                                                payload: {
                                                    ...item,
                                                },
                                            })
                                        }}>x

                                    </button>
                                </td>

                                <td>
                                    <img src="{item.img}" alt={item.title} className="table-img" />
                                </td>

                                <td>
                                    {item.title}
                                    <br />
                                    <small className="text-muted">NT{item.price}</small>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}