import {
  View,
  Pressable,
  Keyboard
} from 'react-native';

import Title from './src/components/Title';
import Body from './src/components/Body';

export default function App() {
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={{ backgroundColor: '#cbcbcb', flex: 1 }}>
        <Title />
        
        <Body />
    </Pressable>
  );
}