import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addTableData, initTable} from "../actions/table";


class Table extends Component {
    static propTypes = {
        data: PropTypes.array
    }

    componentWillMount() {
        this.props.initTable(this.props.data|| []);
    }

    render() {
        let tableData = [];
        for(let i of this.props.data){
            tableData.push(
                <div key={i.id} className='line'>
                    <div className="name">{i.name}</div>
                    <div className="create-time">{i.createTime}</div>
                </div>
            )
        }
        return (
          <div className="table">
              <button onClick={this.addData}>Add Data</button>
              <div className="table-data">
                  <div className="line">
                      <div className="name">名称</div>
                      <div className="create-time">时间</div>
                  </div>
                  {tableData}
              </div>
          </div>
        );
    }

    addData = () => {
        this.props.addTable({
            id: this.props.data.length + 1,
            name: Math.random(),
            createTime: Date.now()
        })
    }
}

const mapDataToProps = state => {
    return {
        data: state.tableReducer.tableData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initTable: data => {
            dispatch(initTable(data))
        },
        addTable: data=>{
            dispatch(addTableData(data))
        }
    }
}

export default connect(mapDataToProps,mapDispatchToProps)(Table);
