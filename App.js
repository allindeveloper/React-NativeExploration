/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, ActivityIndicator,
      Image} from 'react-native';
import Nav from './src/components/Nav';
import Generator from './src/components/Generator';
import ListItem from './src/components/ListItem';
import Input from './src/components/Input';
import PickerComponent from './src/components/PickerComponent';
import Bike from './src/assets/images/bike.jpg';
import ModalComponent from './src/components/ModalComponent';

class App extends Component {
  state = {
    nameOfApp: 'My Awesome app',
    random: [20, 837],
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, random],
      };
    });
  };

  onItemDelete = position => {
    const newArray = this.state.random.filter((item, index) => {
      return position != index;
    });
    this.setState({
      random: newArray,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Nav name={this.state.nameOfApp} />
        {/*   <View style={styles.basicView}>
          <Text style={styles.basicText}>Hello Guys</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Hello Guys</Text>
        </View>

        <Generator add={this.onAddRandom} />

        <ListItem items={this.state.random} delete={this.onItemDelete} /> */}

        
        <ScrollView 
        style={{width:'100%'}}
        >
          {/* <Input /> */}
          {/* <PickerComponent/>

          <ActivityIndicator
              size="large"
              color="#0000ff"

          /> */}

          {/* <Image source={Bike}
                  style={styles.bike}
                  resizeMode="contain" /> */}
          
          <ModalComponent />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  },
  basicText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
  bike:{
    width:'100%',
    height:300,
    marginTop:20
  }
});

export default App;
