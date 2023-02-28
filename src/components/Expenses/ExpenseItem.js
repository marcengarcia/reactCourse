import './ExpenseItem.css'
import Card from "../UI/Card"
import ExpenseDate from './ExpensaDate';

const ExpenseItem = (props) => {
const clickHandler = () => {console.log('clicked!')};

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>change title</button>
        </Card>);
}

export default ExpenseItem;