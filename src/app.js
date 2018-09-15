import React from 'react'
import {
  Animated,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View
} from 'react-native'
import Interactable from 'react-native-interactable'

export default ({ position }) => (
  <View style={styles.container}>
    <Text>Content goes here</Text>
    <TouchableWithoutFeedback style={styles.shadowTouchable}>
      <Animated.View style={[styles.shadow, {
        opacity: position.interpolate({
          inputRange: [0, INITIAL_MARGIN_TOP],
          outputRange: [1, 0]
        })
      }]} />
    </TouchableWithoutFeedback>
    <Interactable.View
      verticalOnly
      initialPosition={{ y: INITIAL_MARGIN_TOP }}
      snapPoints={[{ y: 0 }, { y: INITIAL_MARGIN_TOP }, { y: HEIGHT - WIDTH }]}
      animatedValueY={position}
      style={{position: 'absolute'}}>
      <View style={styles.bottomSheet} /> 
    </Interactable.View>
  </View>
)

const HEIGHT = Dimensions.get('window').height 
const WIDTH = Dimensions.get('window').width
const INITIAL_HEIGHT = 80
const INITIAL_MARGIN_TOP = HEIGHT - INITIAL_HEIGHT

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 40
  },
  shadow: {
    backgroundColor: 'black',
    height: HEIGHT,
    position: 'absolute',
    width: WIDTH
  },
  shadowTouchable: {
    backgroundColor: 'transparent',
    height: HEIGHT,
    position: 'absolute',
    width: WIDTH
  },
  bottomSheet: {
    backgroundColor: 'cyan',
    borderRadius: 8,
    height: HEIGHT,
    width: WIDTH,
  },
})
