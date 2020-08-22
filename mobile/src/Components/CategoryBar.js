import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlightBase,
} from 'react-native';
import CategoryBarButton from './CategoryBarButton.js';

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'white',
    height: 55,
  },
  categoryButton: {
    fontSize: 20,
    padding: 10,
    height: 55,
  },
  selected: {
    backgroundColor: '#333',
    color: 'white',
  },
});

class CategoryBar extends React.Component {
  constructor(props) {
    super(props);
    console.log('test', props.menu[0] ? props.menu[0]._id : 0);
    this.state = {selected: 0};
  }

  componentDidMount() {
    console.log(this.props.menu);
    this.setState({selected: this.props.menu[0] ? this.props.menu[0]._id : 0});
  }

  createCategories() {
    console.log(this.state);
    let children = [];

    this.props.menu.forEach(element => {
      children.push(
        <CategoryBarButton
          key={element._id}
          name={element.name}
          selected={element._id === this.state.selected}
          onPress={() => {
            this.setState({selected: element._id});
          }}
        />,
      );
    });
    return children;
  };

  render() {
    return (
      <ScrollView style={styles.bar} horizontal={true}>
        {this.createCategories()}
      </ScrollView>
    );
  }
}

export default CategoryBar;
