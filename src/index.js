import { Animated } from 'react-native'
import {
  compose,
  withProps
} from 'recompose'
import App from './app'

export default compose(
  withProps({
    position: new Animated.Value(0)
  })
)(App)
