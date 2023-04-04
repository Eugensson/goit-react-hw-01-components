import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr>
          <th className={css.transactionHeadText}>Type</th>
          <th className={css.transactionHeadText}>Amount</th>
          <th className={css.transactionHeadText}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.transactionBodyText}>{type}</td>
            <td className={css.transactionBodyText}>{amount}</td>
            <td className={css.transactionBodyText}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
