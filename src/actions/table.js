export const INIT_TABLE = 'INIT_TABLE';
export const ADD_TABLE_DATA = 'ADD_TABLE_DATA';

export const initTable = (data) => {
    return {
        type: INIT_TABLE,
        data
    }
}

export const addTableData = (data) => {
    return {
        type: ADD_TABLE_DATA,
        data
    }
}
