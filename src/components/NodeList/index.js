import React, { Component } from 'react';
import ButtonComponent from '../../components/ButtonComponent';

class NodeListComponent extends Component {


  addNode = (evt, nodeObj) => {
    evt.preventDefault();    
    this.props.addNode(nodeObj);

  }

  addSubNode = (evt, nodeObj) => {
    evt.preventDefault();    
    this.props.addSubNode(nodeObj);
  }

  removeNode = (evt, nodeObj) => {
    evt.preventDefault();    
    this.props.removeNode(nodeObj);
  }

  saveData = evt => {
    evt.preventDefault();    
    sessionStorage.setItem("nodes",JSON.stringify(this.props.nodeList));
  }


  hideSubNodes = evt => {
    evt.preventDefault();
    const childNodesUL = evt.target.parentElement.children.length && Array.from(evt.target.parentElement.children).find(child => child.nodeName === "UL");
    if(childNodesUL.classList.contains("hide")) {
      childNodesUL.classList.remove("hide");
      evt.target.innerText = "Hide";
    }
    else {
      childNodesUL.classList.add("hide");
      evt.target.innerText = "Show";       
    }
  }

  showAllNodes = evt => {
    evt.preventDefault();
    const nodesUL = document.querySelectorAll("ul.nodes-wrapper")
    Array.from(nodesUL).forEach(ele => {
      ele.classList.remove("hide");
    });
    this.setState({showText: true});
  }

  displayNodes = (nodeList, level) => {
    if (nodeList && Object.keys(nodeList).length) {
      return <ul className="nodes-wrapper" data-level={level}>
        {
          Object.keys(nodeList).map((ele, idx) => (
            <li key={ele} data-id={ele}>
              {nodeList[ele].name}
              <ButtonComponent onClick={evt => this.addNode(evt, nodeList[ele])} name={"Add Node"} />
              <ButtonComponent onClick={evt => this.addSubNode(evt, nodeList[ele])} name={"Add Sub Node"} />
              <ButtonComponent onClick={evt => this.removeNode(evt, nodeList[ele])} name={"Remove Node"} />
              {
                (nodeList[ele].children && Object.keys(nodeList[ele].children).length)
                  ?
                  <ButtonComponent onClick={this.hideSubNodes} name={this.state && !this.state.showText ? "Show" : "Hide"} />
                  :
                  null
              }
              {
                nodeList[ele].children && Object.keys(nodeList[ele].children).length ? this.displayNodes(nodeList[ele].children, level++) : null
              }
            </li>
          ))
        }
      </ul>      
    }
    else {
      return <h4>Sorry! No Nodes</h4>;
    }
  }

  render() {
    const { nodeList } = this.props;
    return (
      <div>
        {this.displayNodes(nodeList, 1)}
        <ButtonComponent onClick={this.saveData} className="save-btn top-right" name={"Save"} />
        <ButtonComponent onClick={this.showAllNodes} className="expand-btn top-right" name={"Expand All"} />  
      </div>    
    );
  }
}

export default NodeListComponent;
