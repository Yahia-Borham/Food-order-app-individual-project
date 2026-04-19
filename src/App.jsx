





import { useState, useRef } from "react";
import Main from "./components/main";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SuccessCheckOut from "./components/SuccessCheckOut";
import { GlobalState } from "./Store/GlobalState"


function App() {


  const [meals, setMeals] = useState([])
  const [userMeals, setUserMeals] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const refCart = useRef()
  const refCheckOut = useRef()
  const refsuccessCheckOut = useRef()
  const refErr = useRef()

  const HandelMealsChange = async () => {

    const resp = await fetch("http://localhost:3001/meals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!resp.ok)
      console.log("error in retreving response object")
    const data = await resp.json()
    setMeals(data)

  }

  const HandelIncreaseUserMeals = (selectedMeal) => {

    setUserMeals((oldUserMeals) => {

      let array = [...oldUserMeals]
      const findedMeal = array.find((userMeal) => userMeal.id === selectedMeal.id)
      const index = array.indexOf(findedMeal)
      if (findedMeal) {
        findedMeal.length += 1
        array = array.filter((userMeal) => userMeal.id !== findedMeal.id)
        array.splice(index, 0, findedMeal);
        console.log(findedMeal.length)
      } else {
        selectedMeal = Object.assign(selectedMeal, { length: 1 })
        array = [...array, selectedMeal]
        console.log(array)
      }
      return array

    }
    )

  }

  const HandelDecreaseUserMeals = (selectedMeal) => {


    setUserMeals((oldUserMeals) => {

      let array = [...oldUserMeals]
      const findedMeal = array.find((userMeal) => userMeal.id === selectedMeal.id)
      const index = array.indexOf(findedMeal)
      if (findedMeal.length > 1) {
        findedMeal.length -= 1
        array = array.filter((userMeal) => userMeal.id !== findedMeal.id)
        array.splice(index, 0, findedMeal);
        console.log(findedMeal.length)
        return array
      } else {
        console.log(" removed")
        return array.filter((userMeal) => userMeal.id !== findedMeal.id)

      }


    })

  }

  const HandelShowModal = (value, type) => {

    if (type === "cart")
      if (value)
        refCart.current.showModal()
      else
        refCart.current.close()
    else if (type === "checkOut")
      if (value)
        refCheckOut.current.showModal()
      else
        refCheckOut.current.close()
    else if (type === "SuccessCheckOut")
      if (value)
        refsuccessCheckOut.current.showModal()
      else
        refsuccessCheckOut.current.close()
    else if (type === "error")
      if (value)
        refErr.current.showModal()
      else
        refErr.current.close()

  }

  const HandelTotalCost = () => {


    setTotalCost(() => {
      let p = 0
      if (userMeals.length !== 0)
        userMeals.forEach((value) => {
          p += (parseInt(value.price) * value.length)
        })
      return p
    })

  }



  const globalValues = {
    meals,
    HandelMealsChange,
    userMeals,
    HandelIncreaseUserMeals,
    HandelDecreaseUserMeals,
    HandelShowModal,
    totalCost,
    HandelTotalCost
  }

  return (
    <GlobalState value={globalValues}>
      <Cart ref={refCart} />
      <SuccessCheckOut ref={refsuccessCheckOut} />
      <Checkout ref={refCheckOut} ref2={refErr} />
      <Main />
      <Meals />

    </GlobalState>

  );
}

export default App;
