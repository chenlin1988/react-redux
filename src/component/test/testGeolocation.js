/**
 * Created by lin.chen on 2017/8/2.
 */
import React,{Component,PropTypes} from 'react';

export default class GeolocationComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:""
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <button onClick={this.props.getGeoInfo}>获取地理位置：</button>
                <br/>
                {this.state.value}
            </div>
        );
    }
}

GeolocationComp.propTypes = {
    value:PropTypes.string,
    getGeoInfo:PropTypes.func,
};