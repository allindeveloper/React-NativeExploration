import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Picker,
  Slider
} from 'react-native';


class PickerComponent extends Component{

    state={
        language:'English',
        value:50
    }

    handleSliderChange = (value) =>{
        this.setState({value:value})
    }

    render(){


        return(
            <View>
                <Picker 
                style={{width:'100%'}}
                selectedValue={this.state.language}
                onValueChange={(itemValue,itemIndex)=>this.setState({language:itemValue})}
                >
                  <Picker.Item label="Spanish" value="spanish"/>  
                  <Picker.Item label="English" value="english"/>  
                </Picker>
                <Slider
                 value={this.state.value}
                 maximumValue={100}
                 minimumValue={0}
                 step={20}
                 onValueChange={this.handleSliderChange}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    
})

export default PickerComponent