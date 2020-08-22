import React from 'react';
import {connect} from 'react-redux';
import {removeItemFromCart} from '../actions/cartActions';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  product: {
    margin: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    height: 150,
  },
  productDescriptionCard: {
    padding: 10,
  },
  productName: {
    fontSize: 20,
  },
  productDescriptionText: {},
  productPrice: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'right',
  },
  productCompact: {
    margin: 10,
    backgroundColor: '#fff',
    elevation: 2,
    flexDirection: 'row',
  },
  productInfoCompact: {
    marginLeft: 10,
  },
  imageCompact: {
    height: 60,
    width: 60,
  },
  productPriceCompact: {
    fontSize: 20,
  },
  delete: {
    width: 60,
    height: 60,
    backgroundColor: '#DB3219',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Product extends React.Component {
  render() {
    return this.props.compact ? (
      <View style={styles.productCompact}>
        <Image
          style={styles.imageCompact}
          source={{
            uri: this.props.item.img,
          }}
        />
        <View style={styles.productInfoCompact}>
          <Text style={styles.productName}>{this.props.item.name}</Text>
          <Text style={styles.productPriceCompact}>
            {this.props.item.price.toFixed(2)} LEI
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.delete}
          onPress={() => this.props.removeItemFromCart(this.props.index)}>
          <FontAwesomeIcon icon={faTrash} color={'white'} size={32} />
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.product}>
          <Image
            style={styles.image}
            source={{
              uri: this.props.item.img,
            }}
          />
          <View style={styles.productDescriptionCard}>
            <Text style={styles.productName}>{this.props.item.name}</Text>
            <Text style={styles.productDescriptionText}>
              {this.props.item.description}
            </Text>
            <Text style={styles.productPrice}>
              {this.props.item.price.toFixed(2)} LEI
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect(
  null,
  {removeItemFromCart},
)(Product);
