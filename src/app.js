import React from 'react'
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native'
import Interactable from 'react-native-interactable'

export default () => (
  <View style={styles.container}>
    <Interactable.View
      verticalOnly
      initialPosition={{ y: HEIGHT - INITIAL_HEIGHT }}
      snapPoints={[{y: 0}, { y: HEIGHT - INITIAL_HEIGHT }, { y: HEIGHT - BOX_WIDTH }]}>
      <View style={styles.box} /> 
    </Interactable.View>
  </View>
)

const HEIGHT = Dimensions.get('window').height 
const BOX_WIDTH = Dimensions.get('window').width
const INITIAL_HEIGHT = 80

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: 'cyan',
    height: HEIGHT,
    width: BOX_WIDTH
  }
})
