import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    textLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#6297f5'
    },
    input: {
        borderWidth: 1,
        borderColor: "#e29b00",
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 4,
        marginBottom: 14,
        fontSize: 20,
        color: '#e29b007c',
        backgroundColor: '#ebebeb'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#6297f5',
        paddingVertical: 8,
        borderRadius: 4
    },
    buttonClear: {
        alignItems: 'center',
        backgroundColor: '#e29b00',
        paddingVertical: 8,
        borderRadius: 4,
        marginTop: 8
    },
    textButton: {
        color: '#fff'
    }
});