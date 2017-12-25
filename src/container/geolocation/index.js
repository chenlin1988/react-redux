/**
 * Created by lin.chen on 2017/8/2.
 */
import React,{PropTypes,Component} from 'react';

import {connect} from 'react-redux';


import GeolocationComp from '../../component/test/testGeolocation';


//action
import app_action from '../../action/app_action';


//dispatch,给redux管理的变量
const storeToProps = (state) =>( {
    dispatch:state.dispatch,
    value:state.app.value
});

const mapDispatch = (dispatch) => ({
    fn:{
        getGeoInfo:function (v) {
            dispatch(app_action.getGeoInfo(v));
        }
    }
});

class TestGeoComp extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <GeolocationComp getGeoInfo={this.props.fn.getGeoInfo}/>
            </div>
        );
    }

}

TestGeoComp.propTypes = {
    dispatch:PropTypes.func,
    fn:PropTypes.object,
    value:PropTypes.string,
};

export default connect(storeToProps,mapDispatch)(TestGeoComp);
