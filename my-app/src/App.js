import React, { useState } from 'react';
import styles from './App.module.css';

export const App = () => {

  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  
  const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const handleNumberClick = (num) => {
    if (operator) {
      setOperand2(operand2 + num);
    } else {
      setOperand1(operand1 + num);
    }
  }

  const handleOperatorClick = (op) => {
    if (op === 'C') {
      setOperand1('');
      setOperand2('');
      setOperator('');
      setResult('');
    } else {
      setOperator(op);
    }
  }

  const handleResultClick = () => {
    if (operand1 && operand2 && operator) {
      let res;
      const num1 = Number(operand1);
      const num2 = Number(operand2);
      
      if (operator === '+') {
        res = num1 + num2;
      } else if (operator === '-') {
        res = num1 - num2;
      }

      setResult(res);
    }
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.display} style={{ color: result ? 'blue' : 'black' }}>
        {result ? result : `${operand1} ${operator} ${operand2}`}
      </div>
      <div className={styles.buttonPanel}>
        {NUMS.map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={handleResultClick}>=</button>
        <button onClick={() => handleOperatorClick('C')}>C</button>
      </div>
    </div>
  );
};

export default App;
