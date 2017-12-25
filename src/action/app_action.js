/**
 * Created by lin.chen on 2017/7/11.
 */
export default class AdviserActions {
    // 用户点击按钮时，将触发此方法
    static onTestAdd(num) {
        return { // 这个return,实际上是触发了action,redux会自动去触发reducer中对应的方法
            type: 'TEST::add', // 与reducer中的type对应
            payload: num + 1,
        };
    }

    static onTestSubtract(num){
        return {
            type:'TEST::subtract',
            payload: num - 1,
        };
    }

    static getGeoInfo(value){
        var info = "该浏览器不支持获取地理位置。";

        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function(position) {
                info = "纬度: " + position.coords.latitude +"<br>经度: " + position.coords.longitude;
            });
        }

        return {
            type:'GEOLOCATION::getGeoInfo',
            value:info,
        };
    }

}