/**
 * Created by goumou on 2017/3/3.
 */

'use strict'
import React,{PropTypes} from 'react';
import{
        View,
        Text,
        TouchableOpacity,
        Image,
        StyleSheet,
        Dimensions,
    }from 'react-native';
var {height,width}=Dimensions.get('window');
const ShortLineTwo =()=>(
    <View style={{backgroundColor:'white'}}>
        <Image source={require('../imgs/ic_short_bar.png')}
               style={styles.short_line}/>
    </View>
);
const styles=StyleSheet.create({
    short_line:{
        marginLeft:10,
        marginRight:10,
        width:(width-20)
    },
});

export default ShortLineTwo;