import {INIT_TABLE} from "../actions/table";

const tableReducer = (state, action) => {
    if (!state) {
        state = {
            tableData: []
        }
    }
    switch (action.type) {
        case INIT_TABLE:
            return Object.assign({}, state, {
                tableData: action.data
            })
            break;
        default:
            return state;
    }
}

export default tableReducer;
