/**
 * Created by lin.chen on 2017/7/11.
 */
// 所需的各种插件
import React, { PropTypes as P } from 'react';
import { connect } from 'react-redux';

// 所需的所有组件
import Test from '../../component/test'; // 引入第4步创建的组件


// 本页面所需action
import appAction from '../../action/app_action'; // 稍后创建

// 最终要交给redux管理的所有变量
const mapStoreStateToProps = (state) => ({
    dispatch: state.dispatch,
    testValue: state.app.inputValue,
});


// 最终要交给redux管理的所有action
// 即定义哪些方法将成为action
const mapDispatches = (dispatch) => ({
    fn: {
        onTestAdd: (v) => {
            dispatch(appAction.onTestAdd(v));
        },
        onTestSubtract:(v)=>{
          dispatch(appAction.onTestSubtract(v));
        },
    },
});

// 创建组件
class HomePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Test value={this.props.testValue} onAdd={this.props.fn.onTestAdd} onSubtract={this.props.fn.onTestSubtract}/>
            </div>
        );
    }
}

// ==================
// PropTypes
// ==================

HomePageContainer.propTypes = {
    dispatch: P.func,
    fn: P.object,
    testValue: P.number,
    location: P.any, // location对象包含了浏览器url中的各种信息，会自动被引入到当前组件中，如果不需要的话可以去掉
};

export default connect(mapStoreStateToProps, mapDispatches)(HomePageContainer);