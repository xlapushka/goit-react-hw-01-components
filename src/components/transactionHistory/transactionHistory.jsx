import PropTypes from 'prop-types';

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

  const MarkUp = items.map(({id, type, amount, currency}) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      )
    });
  

  return (
  <table class="transaction-history">
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