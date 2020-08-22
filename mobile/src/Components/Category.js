import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import Product from './Product.js';
import {connect} from 'react-redux';
import {addItemToCart} from '../actions/cartActions';

const styles = StyleSheet.create({
  label: {
    color: '#98989d',
    paddingHorizontal: 20,
    marginBottom: 5,
    marginTop: 10,
    fontSize: 30,
    borderBottomColor: '#98989d',
    borderBottomWidth: 2,
    padding: 5,
  },
});

class Category extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <React.Fragment>
        <Text style={styles.label}>{this.props.name}</Text>
        <View>
          {items.map((item, index) => (
            <Product
              key={index}
              item={item}
              onPress={() => {
                this.props.addItemToCart(item);
              }}
            />
          ))}
        </View>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {addItemToCart},
)(Category);
