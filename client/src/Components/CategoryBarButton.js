import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categoryButton: {
    fontSize: 20,
    padding: 7,
    height: 55,
  },
  selected: {
    backgroundColor: '#333',
    color: 'white',
  },
});

class CategoryBarButton extends React.Component {
  render() {
    const selected = this.props.selected === true ? styles.selected : {};
    return (
      <Text
        key={this.props.name}
        onPress={this.props.onPress}
        style={{...styles.categoryButton, ...selected}}>
        {this.props.name}
      </Text>
    );
  }
}

export default CategoryBarButton;
