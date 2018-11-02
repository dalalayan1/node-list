import React, { Component } from 'react';
import { Provider } from 'react-redux';
import NodeListComponent from '../../containers/NodeList';

class App extends Component {
  render() {
    const { store,
        } = this.props;
    return (
        <Provider store={store}>
          <div className="app-wrapper">
            <NodeListComponent />
          </div>
        </Provider>
    );
  }
}

export default App;
