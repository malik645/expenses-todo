
const ExpenseDate = (props) =>{
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return (
        <div className='row border border-dark text-center bg-info py-3 rounded'>
        <div className='col-12'>{month}</div>
         
         <div className='col-12'>{year}</div>
         <div className='col-12'>{day}</div>
        </div>
    );
}
export default ExpenseDate;