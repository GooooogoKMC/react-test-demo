import {INIT_TREE} from "../actions/tree";

const treeReducer = (state, action) => {
    if(!state){
        state = {
            treeData: []
        }
    }
    switch (action.type) {
        case INIT_TREE:
            return Object.assign({}, state, {
                treeData: action.data
            })
            break;
        default:
            return state;

    }
}

export default treeReducer;
