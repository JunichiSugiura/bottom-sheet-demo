import React from 'react'
import {
  Alert,
  Animated,
  Button,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View
} from 'react-native'
import Interactable from 'react-native-interactable'

export default ({
  isOpen,
  onAlert,
  onClose,
  position,
  setBottomSheetRef
}) => (
  <View style={styles.container}>
    <Text>Content goes here</Text>
    <Button title='Can You Still Press Me?' onPress={() => { Alert.alert('Cool') }} />
    {isOpen &&
      <TouchableWithoutFeedback style={styles.shadowTouchable} onPress={onClose}>
        <Animated.View style={[styles.shadow, {
          opacity: position.interpolate({
            inputRange: [0, INITIAL_MARGIN_TOP],
            outputRange: [1, 0]
          })
        }]} />
      </TouchableWithoutFeedback>
    }
    <Interactable.View
      alertAreas={[{ id: 'basePosition', influenceArea: { top: INITIAL_MARGIN_TOP  } }]}
      animatedValueY={position}
      boundaries={{top: 0}}
      initialPosition={{ y: INITIAL_MARGIN_TOP }}
      onAlert={onAlert}
      ref={ref => setBottomSheetRef(ref)}
      snapPoints={[{ y: INITIAL_MARGIN_TOP }, { y: HEIGHT / 2 }, { y: 0 }]}
      style={{position: 'absolute'}}
      verticalOnly>
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
    justifyContent: 'center',
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
