import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

  const selectYearHandler = (event) => {
    props.onYearChange(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <h3>Filter by Year</h3>
        <select value={props.selectedYear} onChange={selectYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;