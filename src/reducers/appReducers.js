const initialState = {
    nodes: {
        1363: {
            name: "Node 1363",
            id: 1363,
            parent: [],
            children: {
                
            }          
        }
    }
}

const appReducers = (state = initialState, action) => {

    const newNodes = Object.assign({}, state.nodes);
    let nodeid, currObj;
    switch (action.type) {
        
        case "ADD_NODE":
            currObj = action.payload.parent.length ? newNodes[action.payload.parent[0]] : null;  
            debugger      
            if(action.payload.parent && action.payload.parent.length) {
                action.payload.parent.forEach((ptr, idx) => {
                    if(idx > 0 && idx <action.payload.parent.length - 1) {
                        currObj = currObj[ptr];
                    }
                });
            }
            nodeid = Math.floor(Math.random()*9000 + 1000);  
            if(currObj) {           
                currObj[nodeid] = {
                    name: `Node ${nodeid}`,
                    id: nodeid,
                    parent: [...action.payload.parent, action.payload.id],
                    children: {}                                        
                }
            }
            else {
                newNodes[nodeid] = {
                    name: `Node ${nodeid}`,
                    id: nodeid,
                    parent: [...action.payload.parent, action.payload.id],
                    children: {}                                        
                }
            }
            return Object.assign({}, state, { nodes: newNodes});
            
        case "ADD_SUB_NODE": 
                let currObj = action.payload.parent.length ? newNodes[action.payload.parent[0]] : newNodes[action.payload.id];
                if(action.payload.parent && action.payload.parent.length) {
                    action.payload.parent.forEach((ptr, idx) => {
                        if(idx > 0) {
                            currObj = currObj[ptr];
                        }
                    });
                }
                nodeid = Math.floor(Math.random()*9000 + 1000);                
                currObj["children"][nodeid] = {
                    name: `Node ${nodeid}`,
                    id: nodeid,
                    parent: [...action.payload.parent, action.payload.id],
                    children: {}                                        
                }
                
                
            return Object.assign({}, state, { nodes: newNodes});
                
        case "REMOVE_NODE":
            currObj = action.payload.parent.length ? newNodes[action.payload.parent[0]] : newNodes[action.payload.id];
            if(action.payload.parent && action.payload.parent.length) {
                action.payload.parent.forEach((ptr, idx) => {
                    if(idx > 0 && idx <action.payload.parent.length - 1) {
                        currObj = currObj[ptr];
                    }
                });
            }
            delete newNodes[currObj];
            return Object.assign({}, state, { nodes: newNodes});
                       
        default:
            return state
    }
}
  
export default appReducers;