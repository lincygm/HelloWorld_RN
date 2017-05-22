/**
 * Created by goumou on 2017/3/3.
 */
import * as types from './actionTypes';
import Util from '../common/Common';

export let newsInit =()=>{
    let URL = 'http://tz88.com.cn/cmfx/posts/all';
    return dispatch=>{
        Util.get(URL,(response)=>{
            dispatch(fetchNewsList(response));
        },(error)=>{
            dispatch(fetchNewsError());
            console.log(error)
        })
    }
}

let fetchNewsList = (response) => {
    return {
        type: types.FETCH_NEWS_LIST,
        response
    }
}
let fetchNewsError =()=>{
    return {
        type:types.FETCH_NEWS_ERROR
    }
}