import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense"

// subtract 1 from the month (in 1 based indexing) to convert it into 0 based indexing
let expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
