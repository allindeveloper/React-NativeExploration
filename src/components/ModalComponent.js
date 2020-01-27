/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Button, Image, Modal} from 'react-native';

class ModalComponent extends Component {
  state = {
    modal: false,
  };
  handleModal = () => {
    this.setState({modal: !this.state.modal ? true : false});
  };

  render() {
    return (
      <View style={{width: '100%'}}>
        <Button title="Open Modal" onPress={this.handleModal}></Button>

        <Modal visible={this.state.modal}
                animationType="slide">
            <View style={{
                marginTop:50,
                backgroundColor:'red'
            }}>
                <Text>My Modal Content</Text>
            </View>
            <Button title="Close Modal" onPress={this.handleModal}></Button>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default ModalComponent;
