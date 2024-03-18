import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['table']}>
      <thead>
        <tr className={css['table-title']}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      
      <tbody>
        {items.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr key={id} className={css["table-line"]}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
