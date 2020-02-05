// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Person from './Person';

// Actions
import { obtenerTiposDePersona } from '../../../actions/tiposDePersonaActions';

const mapStateToProps = ({ tiposDePersona }) => ({
  tiposDePersona
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    obtenerTiposDePersona
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
