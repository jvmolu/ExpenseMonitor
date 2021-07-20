import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {

    if(props.filteredExpenses.length === 0)
    {
        return <h2 className='expenses-list__fallback'> Found no items! </h2>
    }

    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.map((expense) => (
            <ExpenseItem 
             key={expense.id} 
             date={expense.date} 
             title={expense.title} 
             price={expense.price} 
            />
            ))}
        </ul>
    )
}

export default ExpensesList