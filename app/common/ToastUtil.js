/**
 * Created by goumou on 2017/3/3.
 */
import Toast from 'react-native-root-toast'

let toast;

//×öÒ»¸ötoast
export const toastShort = (content)=>{
    if(toast != undefined){
        Toast.hide(toast)
    }
    toast = Toast.show(content.toString(),{
        duration:Toast.durations.SHORT,
        position:Toast.position.BUTTOM,
        shadow:true,
        animation,true,
        hideOnPress:true,
        delay:0
    });
};

export const toastLong = (content)=>{
    if(toast!==undefined){
        Toast.hide(toast);
    }
    toast = Toast.show(content.toString(),{
        duration:Toast.durations.LONG,
        position:Toast.position.BOTTOM,
        shadow:true,
        animation:true,
        hideOnPress:true,
        delay:0
    });
};