import { Animated } from 'react-native'
import {
  compose,
  withHandlers,
  withProps,
  withStateHandlers
} from 'recompose'
import App from './app'

export default compose(
  withProps({
    position: new Animated.Value(0)
  }),
  withStateHandlers({
    isOpen: false
  }, {
    setIsOpen: () => isOpen => ({ isOpen })
  }),
  withHandlers(() => {
    let bottomSheetRef
    return {
      onAlert: ({ setIsOpen }) => ({ nativeEvent }) => {
        if (JSON.stringify(nativeEvent).includes("\"basePosition\":\"enter\"")) {
          setIsOpen(false)
        } else if (JSON.stringify(nativeEvent).includes("\"basePosition\":\"leave\"")) {
          setIsOpen(true)
        }
      },
      setBottomSheetRef: () => ref => {
        bottomSheetRef = ref
      },
      onClose: () => () => {
        bottomSheetRef.snapTo({ index: 0 })
      }
    }
  })
)(App)
