import { connect } from 'react-redux';
import App from '../../components/App';
import { bindActionCreators } from 'redux';


function mapStateToProps(state) {
  return {
    // tickrAppState: state.tickrAppState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // addQuestionBlock: bindActionCreators(addQuestionBlock, dispatch) 
  }
}

// export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
