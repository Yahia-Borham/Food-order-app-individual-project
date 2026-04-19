





import { useContext, useActionState, useRef } from "react";

import Input from "./Reusable/Input"
import Error from "./Error";
import { GlobalState } from "./../Store/GlobalState"
import { currencyFormatter } from "./../util/CurrencyFormatter"
import { http } from "./../util/CurrencyFormatter"


const Checkout = ({ ref, ref2 }) => {

    const { totalCost, userMeals, HandelShowModal } = useContext(GlobalState)



    const HandelForm = async (oldStateData, formData) => {
        let errors = []
        const formobject = Object.fromEntries(formData.entries())

        if (formobject.name === null ||
            formobject.name.trim() === '')
            errors.push("name is too short, plz update your name")
        if (formobject.email === null ||
            !formobject.email.includes('@'))
            errors.push("wrong email format, plz update your email")
        if (formobject.street === null ||
            formobject.street.trim() === '')
            errors.push("wrong street format, plz update your street")
        if (formobject["postal-code"] === null ||
            formobject["postal-code"].trim() === '')
            errors.push("wrong postalCode format, plz update your postalCode")
        if (formobject.city === null ||
            formobject.city.trim() === '')
            errors.push("wrong postalCode format, plz update your postalCode")


        if (errors.length !== 0)
            return {
                errors,
                formobject
            }
        else {
            let response = null

            const order = { customer: formobject, items: userMeals }
            response = await http("orders", "POST", order)
            if (!response.ok) {
                HandelShowModal(false, "checkOut");
                HandelShowModal(true, "error");
            }
            else {
                HandelShowModal(false, "checkOut")
                HandelShowModal(true, "SuccessCheckOut")
            }
            return { errors: null, formobject: null }
        }

    }

    const [formState, formAction, pending] = useActionState(HandelForm, { errors: null, formobject: null })

    return (

        <>
            < Error ref={ref2} message={null} />
            <dialog className="modal" ref={ref}>



                <form className="control" action={formAction}>
                    <h2>Checkout</h2>
                    <p>Total Amount {currencyFormatter.format(totalCost)}</p>

                    <section>
                        <Input lableName={"name"}
                            name={"name"}
                            type={"text"}
                            defaultValue={formState.formobject ? formState.formobject["name"] : ""} />
                        <Input lableName={"email"}
                            name={"email"}
                            type={"email"}
                            defaultValue={formState.formobject ? formState.formobject["email"] : ""} />
                        <Input lableName={"street"}
                            name={"street"}
                            type={"text"}
                            defaultValue={formState.formobject ? formState.formobject["street"] : ""} />
                        <Input lableName={"postal-code"}
                            name={"postal-code"}
                            type={"number"}
                            defaultValue={formState.formobject ? formState.formobject["postal-code"] : ""} />
                        <Input lableName={"city"}
                            name={"city"}
                            type={"text"}
                            defaultValue={formState.formobject ? formState.formobject["city"] : ""} />

                        {formState.errors && (
                            <ul className="checkout-errors">
                                {formState.errors.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        )}
                    </section>

                    <p className="modal-actions">
                        <button type="button" className="text-button" onClick={() => HandelShowModal(false, "checkOut")}>
                            Close
                        </button>
                        <button className="button" formAction={formAction} >
                            {pending ? "...Placing your order" : "Submit Order"}
                        </button>
                    </p>

                </form>

            </dialog>
        </>
    );
}

export default Checkout;