/**
 * Created by goumou on 2017/3/3.
 */
'use strict';
import React,{PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
const ImageButton = ({ onPress, title, icon}) => (
  <TouchableOpacity style={styles.wrap_style} onPress={onPress}>
      <Image style={styles.item_img} source={icon}>
         <Text style={{alignSelf:'center',fontSize:12}}>{title}</Text>
      </Image>  
  </TouchableOpacity>
);
const styles=StyleSheet.create({
    wrap_style:{
        height:25,
    },
    item_img:{
        width:76,
        height:25,
        justifyContent:'center',
    },
});
export default ImageButton;