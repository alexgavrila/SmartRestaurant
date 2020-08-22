import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

import Product from '../Components/Product.js';

const styles = StyleSheet.create({
  totalArea: {
    backgroundColor: '#fff',
    elevation: 3,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 32,
  },
});

class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  computeTotalPrice() {
    return this.props.cartItems
      .reduce((acc, curr) => acc + curr.price, 0)
      .toFixed(2);
  }

  render() {
    return (
      <>
        <ScrollView style={styles.productArea}>
          {this.props.cartItems.map((item, index) => (
            <Product key={index} index={index} item={item} compact />
          ))}
        </ScrollView>
        <View style={styles.totalArea}>
          <Text style={styles.totalText}>Total:{this.computeTotalPrice()}</Text>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({cartItems: state.cartItems});

export default connect(mapStateToProps)(Cart);
