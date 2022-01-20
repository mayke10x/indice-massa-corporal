import { View } from 'react-native';

import Calculator from './Calculator';

import { styles } from './styles';

export default function Body() {
    return (
        <View style={styles.boxBody}>
            <Calculator />
        </View>
    )
}