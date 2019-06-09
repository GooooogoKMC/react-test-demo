import {INIT_TABLE,ADD_TABLE_DATA} from "../actions/table";

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
            });
        case ADD_TABLE_DATA:
            return Object.assign({}, state, {
                tableData: [...state.tableData, action.data]
            });
        default:
            return state;
    }
}

export default tableReducer;
