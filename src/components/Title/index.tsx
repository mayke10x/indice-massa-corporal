import { View, Text } from 'react-native';

import { styles } from './styles';

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textPrimary}>Meu índice de</Text>
            <Text style={styles.textSecondary}>massa corporal</Text>
        </View>
    )
}