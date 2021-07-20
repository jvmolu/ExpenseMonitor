import {useState} from 'react'
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpenseForm/NewExpense"

// subtract 1 from the month (in 1 based indexing) to convert it into 0 based indexing
let DUMMY_EXPENSES = [
  {
    id : 1,
    date : new Date(1973, 1 -1, 1),
    title: "House",
    price: "10 mil"
  },
  {
    id : 2,
    date : new Date(2001, 11 -1, 10),
    title: "Car",
    price: "1 mil"
  },
  {
    id : 3,
    date : new Date(2001, 4 -1, 18),
    title: "Bike",
    price: "2 mil"
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const onSubmitExpenseForm = (newExpense) => {
    setExpenses(
      (prevExpenses) => {
        return [newExpense, ...prevExpenses]
      }
    )

    console.log(newExpense + " in App.js")
  }

  return (
    <div>
      <NewExpense onSubmitExpenseForm={onSubmitExpenseForm}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
