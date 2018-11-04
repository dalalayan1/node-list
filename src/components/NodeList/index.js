import React, { Component } from 'react';
import ButtonComponent from '../../components/ButtonComponent';

class NodeListComponent extends Component {


  addNode = (evt, nodeObj) => {
    this.props.addNode(nodeObj);

  }

  addSubNode = (evt, nodeObj) => {
    this.props.addSubNode(nodeObj);
  }

  removeNode = (evt, nodeObj) => {
    this.props.removeNode(nodeObj);
  }


  displayNodes = (nodeList, level) => {
    if (nodeList && Object.keys(nodeList).length) {
      return <ul className="nodes-wrapper" data-level={level}>
        {
          Object.keys(nodeList).map((ele, idx) => (
            <li key={ele} data-id={ele}>
              {nodeList[ele].name}
              {
                nodeList[ele].children && Object.keys(nodeList[ele].children).length && this.displayNodes(nodeList[ele].children, level++)
              }
              <ButtonComponent onClick={evt => this.addNode(evt, nodeList[ele])} name={"Add Node"} />
              <ButtonComponent onClick={evt => this.addSubNode(evt, nodeList[ele])} name={"Add Sub Node"} />
              <ButtonComponent onClick={evt => this.removeNode(evt, nodeList[ele])} name={"Remove Node"} />
            </li>
          ))
        }
      </ul>      
    }
  }

  render() {
    const { nodeList } = this.props;
    return (
      this.displayNodes(nodeList, 1)
    );
  }
}

export default NodeListComponent;
