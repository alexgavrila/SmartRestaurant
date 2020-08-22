import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  cartParent: {
    position: 'absolute',
    zIndex: 100,
    width: 70,
    height: 70,
  },
  cart: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#f60',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  cartIcon: {
    fontSize: 30,
    color: 'white',
    fontWeight: '900',
  },
  cartNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#39F',
    position: 'absolute',
    top: -10,
    left: -10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  cartNumberText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
  },
});

class Cart extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{...styles.cartParent, ...this.props.style}}
        onPress={this.props.onPress}>
        <View style={styles.cart}>
          <View style={styles.cartNumber}>
            <Text style={styles.cartNumberText}>
              {this.props.cartItems.length}
            </Text>
          </View>
          <FontAwesomeIcon icon={faShoppingCart} color={'white'} size={25} />
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

export default connect(
  mapStateToProps,
  null,
)(Cart);
