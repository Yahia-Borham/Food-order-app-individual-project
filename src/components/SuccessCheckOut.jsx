





import { useContext } from "react";
import { GlobalState } from "./../Store/GlobalState"

const SuccessCheckOut = ({ ref }) => {

    const { HandelShowModal } = useContext(GlobalState)

    return (

        <dialog className="modal" ref={ref}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully.<br />
                Confirmation e-mail will be sent soon.
            </p>
            <p className="modal-actions">
                <button className="text-button"
                    onClick={() => HandelShowModal(false, "SuccessCheckOut")}>
                    Close
                </button>
            </p>
        </dialog>




    );
}

export default SuccessCheckOut;