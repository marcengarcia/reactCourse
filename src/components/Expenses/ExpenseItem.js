import React, {useState} from 'react';
import './ExpenseItem.css'
import Card from "../UI/Card"
import ExpenseDate from './ExpensaDate';



const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);
    

    const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
};

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>change title</button>
        </Card>);
}

export default ExpenseItem;