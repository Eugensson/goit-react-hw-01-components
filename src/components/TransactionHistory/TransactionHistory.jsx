import PropTypes from 'prop-types';
import {
  Transaction,
  TransactionHead,
  TransactionHeadText,
  TransactionBodyText,
} from 'components/TransactionHistory/TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <TransactionHead>
        <tr>
          <TransactionHeadText>Type</TransactionHeadText>
          <TransactionHeadText>Amount</TransactionHeadText>
          <TransactionHeadText>Currency</TransactionHeadText>
        </tr>
      </TransactionHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TransactionBodyText>{type}</TransactionBodyText>
            <TransactionBodyText>{amount}</TransactionBodyText>
            <TransactionBodyText>{currency}</TransactionBodyText>
          </tr>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
