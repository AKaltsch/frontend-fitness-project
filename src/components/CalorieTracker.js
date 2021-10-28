import React from 'react'
import Balance from "./CalorieTrackerComponents/Balance"
import CalorieExpenses from "./CalorieTrackerComponents/CalorieExpenses"
import CalorieTransactions from "./CalorieTrackerComponents/CalorieTransactions"
import TransactionForm from "./CalorieTrackerComponents/TransactionForm"

import {GlobalProvider} from './context/CalorieState'

function CalorieTracker() {
    return (
        <GlobalProvider>
           <h1>Calorie Tracker</h1>
           <div className="container">
                <Balance />
                <CalorieExpenses />
                <CalorieTransactions />
                <TransactionForm />
           </div>
        </GlobalProvider>
    )
}

export default CalorieTracker
