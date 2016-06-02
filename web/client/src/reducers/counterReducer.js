/**
    * 把今天最好的表现当作明天最新的起点．．～
    * いま 最高の表現 として 明日最新の始発．．～
    * Today the best performance  as tomorrow newest starter!
    * Created by IntelliJ IDEA.
    *
    * @author: xiaomo
    * @github: https://github.com/qq83387856
    * @email: hupengbest@163.com
    * @QQ_NO: 83387856
    * @Date: 2016/5/19 10:01
    * @Description:
    * @Copyright(©) 2015 by xiaomo.
    **/
import * as types from "../constants/ActionTypes";

export default function counter(state = 0, action) {
    switch (action.type) {
        case types.INCREMENT_COUNTER:
            return state + 1;
        case types.DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}
