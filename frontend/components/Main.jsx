



import { forwardRef, useContext } from "react";
import menuImg from "./../assets/logo.jpg"
import { GlobalState } from "./../Store/GlobalState"

const Main = () => {



    const { userMeals, HandelShowModal, HandelTotalCost } = useContext(GlobalState)

    return (


        <main id="main-header">

            <section id="title">
                <img src={menuImg} alt=" menu image" />
                <h1>Fast Food menu</h1>

            </section>


            <button onClick={() => { HandelShowModal(true, "cart"); HandelTotalCost() }}>
                Cart{userMeals && userMeals.length}
            </button>

        </main >


    );
}

export default Main;     