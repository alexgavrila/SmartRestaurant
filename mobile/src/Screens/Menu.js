import React from 'react';
import {ImageBackground, StyleSheet, Text, Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// import { FaPencil } from 'react-icons/fa';

import Category from '../Components/Category';
import CategoryBar from '../Components/CategoryBar';
import Cart from '../Components/Cart';

const tempImg = 'https://www.herastrau.ro/images/2018/09/26/img_3234-hdr.jpg';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  imageText: {
    backgroundColor: '#0009',
    color: 'white',
    fontSize: 40,
    fontWeight: '900',
  },
  cart: {
    bottom: 10,
    right: 10,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      menu: [],
    };
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [200, 50],
      extrapolate: 'clamp',
    });

    return (
      <React.Fragment>
        <Animated.View
          style={{
            height: headerHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: this.props.route.params.menu.image,
            }}>
            <Text style={styles.imageText}>
              {this.props.route.params.menu.name}
            </Text>
          </ImageBackground>
        </Animated.View>
        <ScrollView
          style={{backgroundColor: 'white'}}
          scrollEventThrotle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
          ])}>
          {this.props.route.params.menu.categories.map(e => (
            <Category key={e._id} name={e.name} items={e.items} />
          ))}
        </ScrollView>
        <Cart
          style={styles.cart}
          onPress={() => this.props.navigation.navigate('Cart')}
        />
      </React.Fragment>
    );
  }
}

export default App;
