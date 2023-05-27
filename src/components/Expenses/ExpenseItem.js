import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = ({data}) => {

// const[newTitle, setNewTitle] = useState("")

// const changeHandler = (event) =>{
//   setNewTitle(event.target.value);
// }

//   const [title, setTitle]=useState(props.title);

//   const clickHandler = () =>{
//     setTitle(newTitle);
//   }
 
const {date,title,amount} = data;
  return <div>
    <Card>
      <div className='row bg-primary my-3 py-5 align-items-center rounded mx-5'>
          <div className='col text-start ps-5 d-flex align-items-center text-white fs-5'>
        <ExpenseDate date= {date}/>
          </div> 
          <div className='col text-start d-flex align-items-center text-white fs-1 fw-bold'>{title }</div>
          <div className='col text-end pe-5 '><button className='btn bg-secondary py-3 px-5 text-white fs-3'>${ amount }</button></div>
         {/* <input type ="text" placeholder='Enter Title'  onChange = {changeHandler} className='col-3'/> */}
          {/* <button onClick={clickHandler} className='btn p-3 bg-success text-white col-2'>Change Title</button> */}
      </div>
      
      </Card>
  </div>;
}
export default ExpenseItem;