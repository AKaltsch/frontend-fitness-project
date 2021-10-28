import React, {useContext} from 'react'
import { GlobalContext } from "../context/CalorieState";

function Balance() {
    const { entries } = useContext(GlobalContext);
    const amounts = entries.map(entry => entry.calories);
    console.log(amounts)
    const total = amounts.reduce((acc, item) => (acc -= item), 0);

    return (
        <div>
            <h4>Total Net Calories</h4>
            <h1>{total}kcal</h1>
        </div>
    )
}

export default Balance
