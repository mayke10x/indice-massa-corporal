import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1,
    },
    success: {
        backgroundColor: '#3ad54a7c',
        borderColor: '#3ad54a',
    },
    warning: {
        backgroundColor: '#d598187c',
        borderColor: '#d59818',
    },
    danger: {
        backgroundColor: '#ff72007d',
        borderColor: '#ff7200',
    },
    veryDanger: {
        backgroundColor: '#e704047c',
        borderColor: '#e70404',
    },
    default: {
        backgroundColor: '#6297f57c',
        borderColor: '#6297f5',
    },
    valorInitial: {
        fontWeight: 'bold',
        fontSize: 38,
        textAlign: 'center',
        color: '#888'
    },
    textInitial: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: '#444'
    },
    textValue: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4444447c'
    },
    textShare: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4444447c',
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 10
    },
});