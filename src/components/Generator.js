import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';


// const Generate = () =>{
//     return (
//        <Button title="Add One" onPress={()=>alert('trigger')}/>
//     );
// };


const Generate = (props) =>{
    return (
        <TouchableOpacity 
        style={styles.generate}
        onPress={()=>props.add()}
        >
            <View style={styles.generate}>
            <Text style={{color:"#fff"}}>Add Number</Text>
        </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    generate:{
        backgroundColor:'#00bcd4',
        padding:10,
        width:'100%',
        alignItems:'center'
    }
})

export default Generate;