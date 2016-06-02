import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Counter from "./../../components/demo/Counter";
import * as CounterActions from "./../../actions/CounterActions";

export default class Index extends Component {

    render() {
        const {counter,counterActions} = this.props;
        return (
            <div>
                <Counter counter={counter} actions={counterActions}/>
            </div>
        );
    }
}

function mapState(state) {
    return {
        counter: state.counter
    };
}

function mapDispatch(dispatch) {
    return {
        counterActions: bindActionCreators(CounterActions, dispatch)
    };
}

export default connect(mapState, mapDispatch)(Index);
