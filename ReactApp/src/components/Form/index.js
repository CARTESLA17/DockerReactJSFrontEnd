// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import FormWithList from './FormWithList';

// Actions
import { obtenerTodosLosTitulares, borrarTitular, actualizarTitular, almacenarTitular } from '../../actions/titularesActions';

const mapStateToProps = ({ titulares }) => ({
  titulares
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    obtenerTodosLosTitulares,
	borrarTitular,
	actualizarTitular,
	almacenarTitular
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormWithList);
