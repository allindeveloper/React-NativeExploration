import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


const Nav = (props) =>(
    <View style={styles.nav}>
        <Text>{props.name}</Text>
    </View>
)

const styles = StyleSheet.create({
    nav:{
        backgroundColor:'red',
        alignItems:'center',
        padding:10,
        width:'100%'
    }
})

export default Nav;