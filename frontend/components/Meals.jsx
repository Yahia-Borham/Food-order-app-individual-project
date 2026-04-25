



import { useContext, useEffect } from "react";
import { GlobalState } from "./../Store/GlobalState"
import { currencyFormatter } from "./../util/CurrencyFormatter"

const Meals = () => {

    const { meals, HandelMealsChange, HandelIncreaseUserMeals, HandelTotalCost } = useContext(GlobalState)

    useEffect(() => {

        HandelMealsChange()


    }, [])


    return (

        <main id="meals">
            {meals && meals.map((value) => (
                <li key={value.id} className="meal-item">
                    <article>
                        <img src={`http://localhost:3001/${value.image}`}
                            alt="Meal image"
                        />
                        <h3>{value.name}</h3>
                        <p className="meal-item-price">{currencyFormatter.format(value.price)}</p>
                        <p className="meal-item-description">{value.description}</p>
                        <p className="meal-item-actions">
                            <button className="button"
                                onClick={() => { HandelIncreaseUserMeals(value); HandelTotalCost }}>
                                Add to Cart
                            </button>
                        </p>
                    </article>
                </li>
            ))}
        </main>
    );
}

export default Meals;