import PropTypes from 'prop-types';
import css from './transactionHistory.module.css'

TransactionHistory.prototypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.string,  
    type : PropTypes.string, 
    amount : PropTypes.number, 
    currency : PropTypes.string
  }))
}


export function TransactionHistory(props) {
  const {
    items
  } = props;

  const MarkUp = items.map(({id, type, amount, currency}, i) => {
   
    if (i % 2 !== 0) {
      return (
        <tr key={id} style={{background: '#ededed'}}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        )
    } else { 
      return (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        )
    }
  });
  

  return (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
        {MarkUp}
    </tbody>
  </table>
  )
}