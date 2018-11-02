import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNode, addSubNode, removeNode } from '../../actions';
import NodeListComponent from '../../components/NodeList';

function mapStateToProps(state) {
  return {
    nodeList: state.appReducers.nodes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNode: bindActionCreators(addNode, dispatch),
    addSubNode: bindActionCreators(addSubNode, dispatch),
    removeNode: bindActionCreators(removeNode, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeListComponent);
