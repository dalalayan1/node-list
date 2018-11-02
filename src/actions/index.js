export const addNode = nodeObj => {
    return {
        type: 'ADD_NODE',
        payload: nodeObj        
    };
}


export const addSubNode = nodeObj => {
    return {
        type: 'ADD_SUB_NODE',
        payload: nodeObj
    };
}


export const removeNode = nodeObj => {
    return {
        type: 'REMOVE_NODE',
        payload: nodeObj
    };
}



