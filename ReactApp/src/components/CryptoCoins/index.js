// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import CryptoCoins from './CryptoCoins';

// Actions
import { fetchCoins } from '../../actions/cryptoCoinsActions';

const mapStateToProps = ({ coins }) => ({
  coins
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCoins
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoCoins);
