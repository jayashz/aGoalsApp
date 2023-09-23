import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [validInp, setValidInp] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
        setValidInp(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValidInp(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !validInp ? 'red' : 'black' }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{ borderColor: !validInp ? 'red' : '#ccc', backgroundColor: !validInp ? 'salmon' : 'transparent' }} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
