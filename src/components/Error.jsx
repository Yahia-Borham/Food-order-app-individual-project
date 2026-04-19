



import { GlobalState } from "./../Store/GlobalState"
import { useContext } from "react";

const Error = ({ ref, message }) => {

    const { HandelShowModal } = useContext(GlobalState)



    return (


        <dialog className="error" ref={ref}  >
            <h2>Error!</h2>
            <p>{message ? message : "Error occured while saving your order"}</p>
            <p className="modal-actions">
                <button className="text-button" onClick={() => HandelShowModal(false, "error")}>
                    Close
                </button>
            </p>
        </dialog>



    );
}

export default Error;