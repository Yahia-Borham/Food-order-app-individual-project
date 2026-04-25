import { createContext, useRef } from "react";







export const GlobalState = createContext({
    meals: [],
    HandelMealsChange: () => { },
    userMeals: [],
    HandelIncreaseUserMeals: () => { },
    HandelDecreaseUserMeals: () => { },
    showCart: false,
    HandelShowModal: () => { },
    totalCost: 0,
    HandelTotalCost: () => { }

})
