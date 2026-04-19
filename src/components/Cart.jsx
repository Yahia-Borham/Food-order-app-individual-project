




import { forwardRef, useContext, useEffect, useRef } from "react";
import { GlobalState } from "./../Store/GlobalState"
import { currencyFormatter } from "./../util/CurrencyFormatter"
import { createPortal } from "react-dom";


const Cart = ({ ref }) => {





    const { userMeals,
        totalCost,
        HandelIncreaseUserMeals,
        HandelDecreaseUserMeals,
        HandelTotalCost,
        HandelShowModal
    } = useContext(GlobalState)

    useEffect(() => {
        HandelTotalCost()
    }, [userMeals])


    return createPortal(

        <dialog className="modal" ref={ref}  >

            <main className="cart">

                <h2>Your Cart</h2>
                <ul>
                    {userMeals && userMeals.map((value) => (
                        <li key={value.id} className="cart-item " >
                            {value.name} - {value.length} x {currencyFormatter.format(value.price)}
                            <p className="cart-item-actions">
                                <button onClick={() => HandelDecreaseUserMeals(value)}>-</button>
                                {value.length}
                                <button onClick={() => HandelIncreaseUserMeals(value)}>+</button>
                            </p>
                        </li>

                    ))}
                </ul>
                <p className="cart-total">
                    {currencyFormatter.format(totalCost)}
                </p>
                <p className="modal-actions">
                    <button className="text-button" onClick={() => { HandelShowModal(false, "cart") }}>
                        Close
                    </button>
                    <button className="button"
                        onClick={() => {
                            HandelShowModal(true, "checkOut");
                            HandelShowModal(false, "cart")
                        }
                        }>
                        Go to Checkout
                    </button>

                </p>

            </main>

        </dialog>,
        document.getElementById('modal')

    );

}

export default Cart;