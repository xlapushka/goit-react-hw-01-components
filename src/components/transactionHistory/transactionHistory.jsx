import PropTypes from 'prop-types';
import css from './transactionHistory.module.css'

TransactionHistory.prototypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.string.isRequired,  
    type : PropTypes.string.isRequired, 
    amount : PropTypes.number.isRequired, 
    currency : PropTypes.string.isRequired
  }))
}


export function TransactionHistory(props) {
  const {
    items
  } = props;
  

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
        {items.map(({id, type, amount, currency}, i) => {
            return (
              <tr key={id} style={(i % 2 !== 0) ? {background: '#ededed'} : {background: 'inherit'}}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
              )
        })
 }
    </tbody>
  </table>
  )
}