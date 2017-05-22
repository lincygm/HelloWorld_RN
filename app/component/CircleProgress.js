/**
 * Created by goumou on 2017/3/3.
 */
'use strict';
import React from 'react';
import {
    StyleSheet,
    View,
    Platform,
    ActivityIndicator
    }from 'react-native';

class CircleProgress extends React.Component{
    // ¹¹Ôì
      constructor(props) {
        super(props);
        // ³õÊ¼×´Ì¬
      }
    render() {
            return (
                <ActivityIndicator
                    animating={true}
                    color='white'
                    style={styles.centering}
                    size='small'
                />
            );
 
    }
}
const styles = StyleSheet.create({
    container: {

    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40
    }

});

module.exports = CircleProgress;