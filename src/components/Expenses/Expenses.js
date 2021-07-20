import {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'

function Expenses(props) {

    const [year, setYear] = useState(2001)

    const onYearChange = (newYear) => {
        setYear(() => {return newYear})
        console.log(newYear + " in Expenses.js")
    }

    let filteredExpenses = props.expenses.filter((expense) => {
        return String(expense.date.getFullYear()) === String(year)
    })

    let expensesContent = <p style={{color : 'white'}}> No items bought in {year}! </p>

    if(filteredExpenses.length > 0)
    {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
             key={expense.id} 
             date={expense.date} 
             title={expense.title} 
             price={expense.price} 
            />
         )
        )
    }

    return (
        <div>
            <div className="expenses">
                <ExpenseFilter onYearChange={onYearChange} selectedYear={year} />
                {expensesContent}
            </div>
        </div>
    )
}

export default Expenses