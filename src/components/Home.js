import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount(){

    }
    render() {
        return(
            <div className="home">
                A Demo of react 全家桶
            </div>
        );
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        // React v16.3后废弃该生命周期，可以用新的周期 static getDerivedStateFromProps 代替
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        // shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用。不能在该钩子中setState，会触发重复循环。
        // (React v16.3后废弃该生命周期，可以用新的周期 getSnapshotBeforeUpdate
    }
    componentDidUpdate(prevProps, prevState){

    }
    componentWillUnmount(){

    }
}

export default Home;
